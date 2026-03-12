---
title: Singleton Design Pattern vs Singleton Bean in Spring — Are They the Same?
description: Clearing up the confusion between the Singleton design pattern and Spring's singleton bean scope — scope, thread safety, and when to use which.
pubDate: 2026-03-04
draft: false
tags: ["Java", "Spring Boot", "Design Patterns", "Backend"]
---

If you already know the Singleton Design Pattern and then start learning Spring Framework or Spring Boot, you might get confused.

I was confused too.

When we use `@Component` or `@Bean`, Spring creates only one instance of that class and uses it everywhere in the codebase.

So naturally, the question comes:

**Isn't this just the Singleton Design Pattern?**

And if Spring is already doing this, then why would I ever implement the Singleton pattern manually — for example, for something like a MongoDB connection?

Let's clear this up properly.

## First: What is the Singleton Design Pattern?

The Singleton Design Pattern is a creational design pattern that ensures:

- Only one instance of a class exists in the entire JVM.
- The class controls its own object creation.
- The constructor is private.
- Access is provided via a static method.

**Example:**

```java
public class DatabaseConnection {

    private static final DatabaseConnection INSTANCE = new DatabaseConnection();

    private DatabaseConnection() {}

    public static DatabaseConnection getInstance() {
        return INSTANCE;
    }
}
```

This guarantees:

- One instance per JVM
- The class itself is responsible for maintaining that rule.

## Now: What is a Singleton Bean in Spring?

In Spring, when you define a bean like this:

```java
@Component
public class UserService {}
```

or

```java
@Bean
public UserService userService() {
    return new UserService();
}
```

Spring creates only one instance of that bean.

But here's the important difference:

**Spring Singleton means one instance per bean identifier per IoC container.**

Not one per JVM.

## The Key Difference

| Singleton Design Pattern | Spring Singleton Bean |
|--------------------------|------------------------|
| One instance per JVM | One instance per bean ID |
| Managed manually | One instance per ApplicationContext |
| Uses static | Managed by Spring IoC container |
| Constructor is private | No need for static |
| Independent of any framework | No private constructor required |

## The Big Realization

Spring's singleton scope is not the same as the traditional Singleton pattern.

It is scoped to the IoC container, not the JVM.

For example:

```java
ApplicationContext context1 =
        new AnnotationConfigApplicationContext(AppConfig.class);

ApplicationContext context2 =
        new AnnotationConfigApplicationContext(AppConfig.class);
```

Now what happens?

Spring creates:

- One instance in context1
- One instance in context2

So inside the same JVM, you now have **two** objects of the same class.

This would never happen with a traditional Singleton pattern.

That's the major difference.

## So Why Not Implement Singleton Manually in Spring?

When I was building a MongoDB connection, I initially thought:

*Should I implement Singleton manually to ensure only one connection exists?*

But the answer is:

**No.**

Spring already manages beans efficiently. If you define your MongoDB configuration as a bean, Spring will create and reuse it properly within that container.

Manually implementing Singleton inside a Spring application is:

- Redundant
- Against IoC principles
- Harder to test
- Harder to manage

In Spring, let the container manage object lifecycle.

## Important Question: Are Singleton Beans Thread-Safe?

This is where things get interesting.

**Short answer:**

No, Spring singleton beans are **NOT** automatically thread-safe.

Spring guarantees:

- One instance per container

It does **NOT** guarantee:

- Safe access by multiple threads

In a web application:

- Multiple users
- Multiple requests
- Multiple threads

All threads share the same singleton bean instance.

If your bean has mutable shared state like this:

```java
@Component
public class CounterService {

    private int count = 0;

    public void increment() {
        count++;
    }
}
```

This is **NOT** thread-safe.

Because:

- `count++` is not atomic
- Multiple threads can modify it simultaneously, causing race conditions.

## When Is a Singleton Bean Safe?

Singleton beans are safe when they are:

- Stateless
- Immutable
- Not storing request-specific data in fields

This is why most Spring services look like this:

```java
@Component
public class UserService {

    public int add(int a, int b) {
        return a + b;
    }
}
```

No shared mutable state → no thread issues.

## Final Understanding

**Spring Singleton:**

- One instance per bean ID
- One per IoC container
- Not per JVM
- Not automatically thread-safe

**Traditional Singleton:**

- One instance per JVM
- Controlled by the class itself
- Uses static implementation

## Conclusion

At first glance, Singleton Design Pattern and Spring Singleton Beans look identical.

But they operate at different levels:

- **Singleton Pattern** → JVM-level guarantee
- **Spring Singleton** → Container-level guarantee

Once you understand this distinction, the confusion disappears.

And most importantly:

**In Spring applications, trust the container.**

Don't implement Singleton manually unless you have a very specific non-Spring use case.

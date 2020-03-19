---
title: "Scala: Dealing with Futures of Options"
date: "2020-02-13"
layout: post
draft: false
path: "/posts/scala-dealing-with-futures-of-options"
category: Programming
tags:
 - scala
 - programming
 - functional programming
description: "A guide to handling Options within Futures in Scala."
---

<!--A guide to handling Options within Futures in Scala-->
For the past couple of months, I have been immersing myself in the Scala language and ecosystem, doing my best to learn the common patterns and styles of the language. 

A widely used pattern that I have encountered when writing concurrent Scala applications is the use of Futures. Futures are straight forward enough concept to understand:

> The best way I've found to think of a Future is a box that will, at some point, contain the thing that you want. The key thing with a Future is that you never open the box. Trying to force open the box will lead you to blocking and grief. Instead, you put the Future in another, larger box, typically using the map method. -- [Composing Dependent Futures](https://tersesystems.com/blog/2014/07/10/composing-dependent-futures/)





> A Monad is an object that wraps another object in Scala. 

We commonly use the following monads in Scala:

- `Future[A]` - for asynchronous computations
- `Option[A]` - for optional values
- `Try[A]` - for exception handling 
- `Either[A, B]` - usually to express an error or a value 

## Problem
<!-- Provide a few examples and the problem when dealing with Future of Options -->

## Theory
<!-- Section to introduce the main concepts we are working with -->

#### Futures
A `Future` is simply a placeholder object for a value that may not yet exist, and they provide a way to reason about performing many operations in parallel. So `Futures` give us the ability to write non-blocking Scala code, e.g.

```scala
def getUsernameById(id: Int): Future[User] = ???
```

#### Options

## Solution

## Summary


## Futures 

A `Future` is simply a placeholder object for a value that may not yet exist, and they provide a way to reason about performing many operations in parallel.

> The flatMap method takes a function that maps the value to a new future g, and then returns a future which is completed once g is completed.

```scala
def getUsernameById(id: Int): Future[User] = ???
val result: Future[User] = getUserById(9000).flatmap(user => user.username)
```



Often a Future will hold a value that may or may not exist which wrapped in an `Option[]` e.g.

```scala
def getUser(): Future[Option[User]]
```

If we try to handle the output of getUser we will need to make two calls to map, one over the future and the other one to map the option, like so:

```scala
getUser.map(opt => opt.map(user => user.name))
```

Which results in not very readable code. Things only get more complex if we had a multiple Futures of Options that we need to map over. Let's continue with the User example and let's say that we want to be able to retrieve a users shipping address, starting with the following functions:

```scala
def findUserByEmail(id: Long): Future[User] = ???
def findAddressByUser(user: User): Future[Address] = ???
```





## Monad Transformers


### References:

- [Futures and Promises](https://docs.scala-lang.org/overviews/core/futures.html)
- [Practical Monads - Dealing with Futures of Options](https://medium.com/coding-with-clarity/practical-monads-dealing-with-futures-of-options-8260800712f8)
- [Using Scala Futures](http://allaboutscala.com/tutorials/chapter-9-beginner-tutorial-using-scala-futures/
- [Composing Dependent Futures](https://tersesystems.com/blog/2014/07/10/composing-dependent-futures/)
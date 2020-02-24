---
title: Scala: Dealing with Futures of Options
date: "2020-02-13"
layout: post
draft: true
path: "/posts/scala-dealing-with-futures-of-options"
category: Programming
tags:
 - scala
 - programming
 - functional programming
description: "A guide to handling Options within Futures in Scala"
---

<!--A guide to handling Options within Futures in Scala-->
For the past couple months, I been immersing myself in the Scala language and ecosystem; doing my best to learn the common patterns and styles of the language. 

A common pattern that is widely used on the codebase I'm working with and on asynchronous Scala at large is the use of Futures.

## Futures 

A `Future` is simply a placeholder object for a value that may not yet exist; and they provide a way to reason about performing many operations in parallel.

> The flatMap method takes a function that maps the value to a new future g , and then returns a future which is completed once g is completed.

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
- [Using Scala Futures](http://allaboutscala.com/tutorials/chapter-9-beginner-tutorial-using-scala-futures/)
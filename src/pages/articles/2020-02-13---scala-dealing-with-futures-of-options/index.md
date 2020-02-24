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
A common pattern in Scala is to use Futures to write asynchronous code. Often a Future will hold a value that may or may not exist which wrapped in an `Option[]` 
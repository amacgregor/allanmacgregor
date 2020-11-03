---
title: Circuit Breaker Pattern in Elixir
date: "2020-11-02"
layout: post
draft: false
path: "/posts/circuit-breaker-pattern-in-elixir"
category: Programming
tags:
 - elixir
 - functional programming
 - design patterns
description: "Design for failure with the circuit breaker pattern"
---
<!--Design for failure with the circuit breaker pattern-->

> Circuit breaker is used to detect failures and encapsulates the logic of preventing a failure from constantly recurring, during maintenance, temporary external system failure or unexpected system difficulties.

Now days, microservice based architectures are fairly common and those services being dependend on some external service even more so.

Remote services can hang, fail or become unresponsive. How we prevent those failures from cascading through the system? from taking critical resources? Enter the **Circuit breaker** pattern; the pattern was popularized in the book Release It by Michael Nygard and by [Martin Fowler](https://martinfowler.com/bliki/CircuitBreaker.html)

![Circuit Breaker Pattern](circuit_breaker_diagram.png)

The idea behind this pattern is very simple; **Failures are inevitable**, and trying to prevent them altogether is not realistic. We wrap our external functional call in a circuit breaker module, once failures reach a certain threshold or condition, the circuit breaker trips and all further calls return an error, without a call to the protected function being made at all. 


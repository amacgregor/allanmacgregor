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

In the age of microservices, we are more than likely to have services that are calling and are dependent on external services outside of control.

Remote services can hang, fail or become unresponsive. How can we prevent those failures from cascading through the system? from taking critical resources? 

Enter the **Circuit breaker** pattern; the pattern was popularized in the book Release It by Michael Nygard and by thought leaders like [Martin Fowler](https://martinfowler.com/bliki/CircuitBreaker.html)

![Circuit Breaker Pattern](circuit_breaker_diagram.png)

The idea behind this pattern is very simple; **Failures are inevitable, and trying to prevent them altogether is not realistic**. 

A way to handle this failures is wrapping this operations into some kind of proxy. This proxy is responsible for monitoring recent failures, and use this information to decide whether to allow the operation to proceed or return an early failure instead. 

This proxy is typically implemented as a state machine miminc the functinonality of a physical **circuit breaker** which my have 3 states:

- **Closed:** In this state the circuit breaker let's all the requests go through, while keeping track of the number of recent failures, and if the number of failures exceeds a specific threshold within a specific timeframe, it will switch to the **Open** state.
- **Open:** In this states any request are not sent to external service instead we either fail immediatly returning an extension or fall back to a secondary system like a cache.  
- **Half-Open:** In this state a limited number of requestfrom the application are allowed to pass-through and call our external service. Depending on the result of these requests the **circuit breakre** will either flip to a Closed state or go back to the Open state reseting the counter before trying to open again. 

The Circuit Breaker pattern offers a few key advantages worth noting:

- The **Half-Open** state gives the external system from recovering without getting flooded.
- The **Open** state implementation gives options for how we want to handle failure wether failing right away or falling back to a caching layer or secondary system. 
- This pattern can also be leveraged to help maintaining response times by **quickly rejecting calls** that are likely to fail or timeout. 

## Example

For our example, let's imagine that we have the following scenario:

<!-- Scenario -->

And let's create an example API gateway to make the calls to the github jobs and retrieves the latest 50 jobs posted:

```elixir 
defmodule CircuitBreaker.Api.GithubJobs do 
    ...
    @spec get_positions :: none
    def get_positions do
        case HTTPoison.get(url()) do
        {:ok, response} -> {:ok, parse_fields(response.body)}
        {:error, %HTTPoison.Error{id: _, reason: reason}} -> {:error, reason}
        end
    end
    ...
end
```
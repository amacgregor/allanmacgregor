---
title: When Software Kills
date: "2020-11-27"
layout: post
draft: false
path: "/posts/when-software-kills"
category: Programming
tags:
 - programming
 - software development
 - career
description: "When Software Kills, and what can we do about it"
---

<!--When Software Kills, and what can we do about it-->
We often talk about the [cost of software bugs](https://medium.com/@ryancohane/financial-cost-of-software-bugs-51b4d193f107#:~:text=In%202002%2C%20software%20bugs%20cost%20the%20United%20States%20economy%20approximately,cost%20comes%20from%20various%20places.), some estimates in the [trillions of dollars a year](https://www.continuoustesting.com/report-software-failures-cost-1-1-trillion-in-2016/), and while software bugs might indeed hurt revenue or even the product reputation in some industries, the cost can be much greater and paid in human lives.

On the last **4 decades of professional software development** there have been more than a few instances where software has been directly responsible for killing people.

Let's take a look at two of these catastrophes.

## Deadly Theraphy
![Emulated Terminal](https://upload.wikimedia.org/wikipedia/commons/9/90/Therac25_Interface.png)


From 1985 to 1987, a bug in the control terminal of the [Therac-25 radio therapy machine](https://en.wikipedia.org/wiki/Therac-25#Root_causes), developed by [Atomic Energy of Canada Limited](https://en.wikipedia.org/wiki/Atomic_Energy_of_Canada_Limited), caused at least 6 cases of massive overdoses of radiation, resulting in death or permanent injury.  

The cause of the problem would be later attributed to a race condition within the software, that resulted on the machine administering radiation doses hundreds of times greater than normal.

### What went wrong?

- AECL did not have the **software independently reviewed.**
- AECL decided to rely on **in-house solutions** including the operating system.
- AECL **did not factor in the software** during the assessment of how the machine would produce output.
- AECL reassured operators that **overdoses were impossible**.
- AECL **never tested** the combination of the hardware and software. 
- AECL **reused software from previous iterations** and assumed it bug free and safe.

Additionally, the software was poorly designed, returning unclear and undocumented errors. 

Unfortunately this would not be the last time a bug would cause lethal doses of radiation, and another therapy machine caused at least 5 (21 according to some estimates) deaths in [Panama city in the early 2000's](https://www.baselinemag.com/c/a/Projects-Processes/We-Did-Nothing-Wrong). 

## Bad code takes flight

![737 Max 8](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Boeing_737-8_MAX_N8704Q_rotated.jpg/1024px-Boeing_737-8_MAX_N8704Q_rotated.jpg)

The aviation industry has its own share of fatal incidents caused by software bugs. But there is no better example than the relatively recent issues with the [737 Max 8](https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings).

Recent investigations have found evidence of a fatal software bug on the 737 Max 8, which resulted in the deadly crashes of both the flights of [Ethiopian Airlines](https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302) and [Lion Air.](https://en.wikipedia.org/wiki/Lion_Air_Flight_610)

At this time is suspected that the crashes where caused by a combination of bad software and defects on the manufacture of the plane. 

The most recent bug report being on the indicator light for the **"stabilizer trim system" **which helps lower and raise the plane's nose. The light would turn when it wasn't supposed to, **cause the pilots to overcorrect.**

This particular bug is the [third](https://www.theverge.com/2020/2/6/21126364/boeing-737-max-software-glitch-flaw-problem) one in a row linked to **737 Max 8** crashed, which totals a death count of **346 people** before the airplanes were grounded worldwide. 

### What went wrong?
The numerous software errors are less surprising when considering that [Boeing had outsourced the software maintenance, testing and implementation](https://www.bnnbloomberg.ca/boeing-s-737-max-software-outsourced-to-9-an-hour-engineers-1.1280483) to an Indian company by the name of HCL Technologies Ltd.

It has been widely reported that HCL made heavy use recent college graduates and from offshore developers lacking a deep background in the aerospace field. 

Although Boieng engineers were still responsible for setting specifications, the process was reported as being extremely inefficient and error prone; resulting on endless rounds of revisions.

- Boeing **outsourced the development and testing** of critical software to the lowest bidder.
- HCL used **inexperienced developers** and without experience in the aerospace industry.
- **Corners were cut** to maintain deadlines.
- Similar fashion, the company developing some instrument testing software lacked the expertize.
- **Lack of oversight** from Boeing as supervising the output of the contractors as they where actively working to reduce their 'expensive' headcount of senior software engineers.


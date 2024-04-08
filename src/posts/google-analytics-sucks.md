---
layout: post
title: Google Analytics Sucks
date: 2024-03-01
slug: 'google-analytics-sucks'
summary: Google Analytics 4, and Firebase Analytics claims to be <b>"designed for the future of measurement"</b>. I've seen it widely adopted across startups and large businesses alike; it's touted as some ideal solution to gaining insights into your user's behaviour, i've found it falls far short of my expectations.
---

Google Analytics 4, and Firebase Analytics claims to be <b>"designed for the future of measurement"</b>. I've seen it widely adopted across startups and large businesses alike; it's touted as some ideal solution to gaining insights into your user's behaviour, i've found it falls far short of my expectations.

When i started to learn Google Analytics 4 (GA4) i was immediately dissapointed with it, then i doubted myself and decided to REALLY dig in get across it. Now that i've used it multiple times across several different projects my opinion remains pretty much the same.

In this article i'm going to cover:

- What you want from an analytics platform
- What you get from Google Analytics
- Why Google Analytics falls short of my expectations
- What a better alternative is ( no this isn't a sponsored post )

<hr>

## What You Want From An Analytics Platform

When you're looking for an analytics platform you want to be able to answer questions like:

- How many users are using my app?
- What are the most popular pages?
- What platforms are my users using?
- What are the most popular devices?
- Where are my users coming from?
- What are my users doing on my site?
- Are my users experiencing any issues?

<hr>

## What You Get From Google Analytics

Honestly...<br>
You get all of this.<br><br>

But there's a catch, actually there's many catches.<br><br>

## Why Google Analytics falls short of my expectations

### Inaccurate User Count

I've found that the user count of GA4 is often inaccurate having a larger number of users than is actually in the database.

This is due to GA4 generating a `pseudo_user_id` for each user, and if the user clears their cookies or uses a different device then GA4 will generate a new `pseudo_user_id` for that user. This means that the same user can be counted multiple times.

The only way to avoid this is to use the `user_id` [feature of GA4](https://firebase.google.com/docs/analytics/userid#web-modular-api), to send the users ID whenever you log an event to GA4, but this is not obvious, not the default behaviour, and it's not always possible.

This is a problem because it's hard to trust the data you're getting from GA4, I often find myself querying the database directly to get the real user count.

### Missing Data

I've found that GA4 often misses data, for example, i've found that GA4 often misses data from users using ad blockers, or from users who have disabled cookies.

Some modern browsers are also blocking GA4 by default, and it's not always obvious to the user that they need to enable GA4 to get the full experience of the site.

This means the quantifiable data you're getting from GA4 is not accurate; you're not getting the full picture of what your users are doing on your site.

### No Real Time Data

GA4 does not provide real time data, it can take up to 24 hours for data to be processed and available in the GA4 dashboard.

This is a problem because it's hard to know what's happening on your site right now, and it's hard to know if your users are experiencing any issues.

It also makes it a pain to debug issues, because you can't see the data in real time, you have to wait 24 hours to see if your changes have had any effect.

There are some workarounds to this, for example, you can use the [debug view](https://chromewebstore.google.com/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) to see the data in real time, but this is functionality is only made available via a browser extension, which is incredibly out of date, and no longer maintained.

### False Reporting

I've found that GA4 often reports false data, for example, i've found that GA4 often reports user locations incorrectly, most likely due to the fact that it's using IP addresses to determine the user's location.
This can result in false results due to VPNs, or users using a proxy server.

### Limited Customisation

GA4 is not very customisable, for example, i've found that it's hard to track custom events, or to track custom user properties.

The best way to perform advanced queries is to export the data to BigQuery, and then query the data in BigQuery. This results in a really nice interface for querying the data, but it's astonishing that you have to use a separate tool to get the data you want.

## The Better Solution

**BIGQUERY**

The best solution for me is to use [google bigquery](https://cloud.google.com/bigquery/?hl=en) as the analytics platform.

- Sync your database tables into bigquery
- Sync your cloud logs into bigquery

Using this method you are querying against the real data from your database, your numbers will be accurate, and you can get real time updates.

Because your logs are in bigquery you can query things like the users IP address, device type, and user agent, you can determine locations and identify users who are using VPN's to avoid falsely skewing your reports.

Because these logs are synced in near real time, you can more effectively debug issues and solve problems.

The one downside to this is that you have to write your own queries, and build your own dashboards, but i've found that this is a small price to pay for the accuracy, confidence, and real time data you get from bigquery.

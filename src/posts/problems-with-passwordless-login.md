---
layout: post
title: 'The problems with passwordless login'
date: 2024-03-25
slug: 'problems-with-passwordless-login'
summary: 'While passwordless login can be a great way to reduce friction for users and improve security, there are some downsides that you should be aware of before implementing it in your app or website'
---

I've worked on a few projects that have used passwordless login.

This functionality works by sending a magic link to the user's email address. The user clicks the link, and is automatically logged into the app.

This is a great way to reduce friction for users, and can be more secure than traditional password-based login as it eliminates the risk of password reuse.

However, there are some downsides to passwordless login that you should be aware of before implementing it in your app or website.

## Issues with passwordless login

- Many email providers have link scanning which can mangle magic links
  (especially common with corporate email providers)

- login functionality entirely depends on sender reuputation

- Deep link functionality is still not fully supported by all mobile devices
  Some devices will not open the app even if it's installed and configured correctly
  Some devices will always open the "continueURL" in the browser, ignoring the app store and appID

- You will generally need to build a "backup" option, effectively doubling your work

- It can be difficult for less technical users to understand how it works

- It can be difficult to test, especially if you don't have access to the email provider's link scanning

- Getting your app approved by the app store can be more difficult, as they generally will not enter their email address to test the functionality

### Link Scanning Issues

Many email providers have a feature called link scanning, which scans the links in an email to check for malicious content. This can cause problems with passwordless login, as the magic link may be mangled, blocked, or potentially even clicked by the email provider before the user has a chance to click it: causing the link to no longer be valid.

This is especially common with corporate email providers, which are more likely to have strict security policies in place.

### Sender Reputation

In order to send the magic link, you need to send an email to the user. This means that your email sending domain needs to have a good reputation, otherwise the email may be marked as spam or blocked entirely.

If you're using a third-party service to send the emails, such as SendGrid or Mailgun, you'll likely experiance many issues with this on their free tier, or individual tier as you'll be sending from a shared IP address.

Apple `@icloud` and `@me` email addresses are notorious for blocking emails due to this reason as they have a proprietary spam filter that heavily relies on the reputation of the sender's IP address. They even have an [Apple FAQ page](https://support.apple.com/en-us/102322) on their website that states that they will not whitelist any IP addresses.

In order to get around this, you may need to use a dedicated IP address, or a service that has a good reputation for sending emails.
This may be costly, and involve paying for a higher tier of service.

### Deep Linking

Deep linking is the practice of linking to a specific page or resource within an app, rather than just opening the app. This is important for passwordless login, as you want the user to be taken directly to the app after clicking the magic link.

However, deep linking is still not fully supported by all mobile devices. Some devices will not open the app even if it's installed and configured correctly, and some devices will always open the "continueURL" in the browser, ignoring the app store and appID.

This can be frustrating for users, as they may not understand why the app is not opening, or may not know how to manually open the app.

The differing behavior of deep linking on different devices has been a source of frustration for many developers, and is even one of the reasons why [Firebase has deprecated their dynamic link service](https://firebase.google.com/support/dynamic-links-faq#:~:text=ecosystem%20changes%20impacted%20our%20ability%20to%20provide%20a%20consistently%20stable%20experience%20for%20one%20of%20Firebase%20Dynamic%20Links%E2%80%99%20core%20features%20%2D%20giving%20app%20users%20a%20smooth%20transition%20into%20the%20app%20post%2Dinstall%2C%20regardless%20of%20platform.).

### Backup Option

If you're implementing passwordless login, you'll generally need to build a "backup" option for users who can't or don't want to use the magic link.

This could be a traditional password-based login, or another form of authentication such as OAuth or social login.

This effectively doubles your work, as you'll need to build and maintain two separate authentication systems.

This can be a significant amount of work, especially if you're a small team or working on a tight deadline and in my opinion, defeats the purpose of passwordless login.

### User Understanding

Passwordless login can be difficult for less technical users to understand.
Especially amongst the older generation, who may not be as familiar with the concept of magic links or deep linking.
I've had to explain to many users how to use passwordless login, where to look for the email, and what to do if they can't find it.

This is a blocker for many users, and can lead to a poor user experience if not handled correctly.

### Testing

In order to run automated tests on your passwordless login functionality, you'll need to have some kind of email inbox that you can access programmatically.
Alternatively you can bypass the email sending part of the process, but this will not give you a true representation of how the functionality works in the real world.

### App Store Approval

This is a big one, and one that many developers don't think about until it's too late.
Apple and Google generally will not enter their email address to test the functionality of your app. This sounds a bit silly to me, but it's true.

You'll need to provide a way for them to test the functionality without entering their email address, which can be difficult to do with passwordless login.

This can lead to your app being rejected from the app store, or having to go through a lengthy approval process to get it approved.

The way to fix this generally goes hand-in-hand with the backup option, as you'll need to provide a way for users to log in without using the magic link.

## Conclusion

While passwordless login can be a great way to reduce friction for users and improve security, there are some downsides that you should be aware of before implementing it in your app or website.

Make sure you understand the issues with link scanning, sender reputation, deep linking, and testing before you start building your passwordless login functionality.

Significant callouts are to ensure you establish a good sender reputation well before your "go-live" date, and to have a backup option in place for users who can't or don't want to use the magic link.

---
layout: page
title: nfcGuard
description: Blocks distracting apps until you tap a physical NFC tag. Keep the tag somewhere inconvenient and opening Instagram costs a walk.
img: assets/img/nfcguard_icon.png
importance: 1
category: productivity
year: 2026
stack: Kotlin · Jetpack Compose · NFC
featured: 1
metric: 1,250+ users
icon: assets/img/nfcguard_icon.png
---

<dl class="project-facts">
  <div><dt>Platform</dt><dd>Android 8.0+</dd></div>
  <div><dt>Built with</dt><dd>Kotlin, Jetpack Compose</dd></div>
  <div><dt>Tests</dt><dd>333 unit tests</dd></div>
  <div><dt>Users</dt><dd>1,250+, all organic</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.nfcguard">Google Play</a>
  <a href="https://andebugulin.github.io/nfcGuard/">Website</a>
  <a href="https://github.com/Andebugulin/nfcGuard">Source</a>
  <a href="https://github.com/Andebugulin/nfcGuard/releases/">APK releases</a>
</div>

Software blockers fail for one reason: the off switch is on the same screen as the thing you are avoiding. nfcGuard moves the off switch into the physical world. A blocked app stays blocked until you tap a specific NFC tag, so if the tag lives in the kitchen, every impulse to scroll costs a walk to the kitchen.

<div class="shots">
  <figure><img src="/assets/img/nfcguard_app_with_overlay.webp" alt="Blocked screen" loading="lazy"><figcaption>The block screen</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_modes_screen.webp" alt="Modes" loading="lazy"><figcaption>Modes</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_schedules_screen.webp" alt="Schedules" loading="lazy"><figcaption>Schedules</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_temporary_unlock.webp" alt="Temporary unlock" loading="lazy"><figcaption>Timed unlock</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_lost_your_tag.webp" alt="Lost tag recovery" loading="lazy"><figcaption>Lost tag recovery</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_home_screen.webp" alt="Home" loading="lazy"><figcaption>Home</figcaption></figure>
</div>

## How it works

A **mode** is a set of apps that are either blocked or allowed. Turn one on by hand, or link a **schedule** so it switches on by itself on work days. While a mode is active, those apps will not open. Tapping a linked **NFC tag** unlocks it.

Each tag decides how much it gives you. One tag can unlock a mode completely; another can be capped at five minutes, after which the mode comes back on its own. Keep the generous tag at home and the strict one at the office. A mode with no tags linked accepts any NFC object, such as a transit card or a pair of headphones.

**Lost your tag?** A recovery flow on the home screen asks for a timed attention challenge, then lets you choose which tags are gone. Modes switch off, those tags are removed, and the rest of your setup stays.

## Distribution

More than 1,250 people use nfcGuard, and every one of them found it on their own: no ads, no paid promotion.

## Architecture

The project is split into two Gradle modules so the rules can be tested without a phone.

- **`:domain`** is pure Kotlin: the app state plus four logic objects (`NfcUnlockLogic`, `ScheduleTransitions`, `ModeActivationLogic`, `BlockDecider`). It cannot import Android, the compiler enforces that, and it runs as plain JVM tests.
- **`:app`** holds the Compose UI, services, receivers and the home screen widget. Layers run in one direction, domain to data to side effects to service and UI, with a single owner for each concern.
- **`AppStateRepository`** owns persisted state. Every change goes through one mutex-guarded `update { }`, and exactly one file knows the storage key.
- **`StateSyncer`** owns side effects. After each write it restarts the blocker service, reschedules alarms and refreshes widgets, so no screen has to remember to.
- **`BlockerService`** checks the foreground app each tick and enforces the decision, with an overlay normally or a force-close when accessibility is enabled, which Pixel and Samsung phones require.

Modes, schedules and tags export to JSON or YAML and import back by replacing everything or merging by id.

## What I learned

Android fights long-running apps hard, and every manufacturer fights differently. Most of the work went into staying alive: autostart on Xiaomi and Oppo, battery exemptions, the accessibility path for Pixel, and a permissions page that rechecks each one when you come back. Keeping the rules in a module with no Android in it is what made that churn safe to change.

---
layout: page
title: Awareen
description: A screen time awareness app with persistent overlay timer for mindful device usage.
img: assets/img/awareen.png
importance: 1
category: productivity 
---

## `Awareen` - Screen Time Awareness Guardian

> Awareen (Awareness + Screen) is an Android application that promotes mindful device usage through a persistent overlay timer, helping users become more conscious of their screen time across all applications.

### `Technology Stack`

Built with modern Android development practices:
- `Kotlin` for native Android development
- `Service-based architecture` for background processing
- `Overlay permissions` for system-level integration
- `Foreground services` for reliable operation
- `SharedPreferences` for settings persistence
- `Custom UI components` for flexible display options

### `Core Innovation: Three-Level Alert System`

Awareen features a progressive awareness system that adapts to usage patterns:

1. **Level 1 (Green)**: Default display for normal usage (0-30 minutes)
2. **Level 2 (Yellow)**: Warning phase when approaching limits (30-60 minutes)  
3. **Level 3 (Red)**: Alert phase for excessive usage (60+ minutes) with optional blinking

All colors, positions, and time thresholds are fully customizable to match individual preferences.

### `Key Features`

#### Persistent Overlay System
- **Always-visible timer** that works across all applications
- **Smart display modes**: Always-on or configurable interval-based visibility
- **Customizable positioning** with per-level font sizes and colors
- **System-level integration** that survives app switches and device rotations

#### Advanced Configuration
- **Three-tier customization** for colors, positions, and thresholds
- **Flexible display intervals** with configurable durations
- **Daily auto-reset** with user-defined timing
- **Battery optimization handling** for uninterrupted operation

#### Analytics Dashboard
- **Daily usage tracking** with pattern recognition
- **Historical data visualization** for long-term awareness
- **Trend analysis** to identify usage habits

### `Screenshots Gallery`

#### Main Interface and Settings

<details>
    <summary>View Application Screenshots</summary>
    <div class="col-sm-8">
            {% include figure.liquid path="assets/img/Awareen_app_demonstration.png" title="Main Interface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Complete interface showcasing main controls, customization options, analytics tracking, and overlay functionality
    </div>
</details>

### `Technical Architecture`

#### Service-Based Design
```kotlin
class ScreenTimeService : Service() {
    private val overlayManager = OverlayManager()
    private val timeTracker = TimeTracker()
    
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        startForeground(NOTIFICATION_ID, createNotification())
        return START_STICKY // Ensures service restart after termination
    }
}
```

#### Permission Management System
```kotlin
// Comprehensive permission handling for Android complexity
private fun requestOverlayPermission() {
    if (!Settings.canDrawOverlays(this)) {
        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:$packageName")
        )
        startActivityForResult(intent, OVERLAY_PERMISSION_REQUEST)
    }
}
```

#### Dynamic Display Configuration
```kotlin
class OverlayManager {
    fun updateDisplayLevel(screenTime: Long) {
        val level = when {
            screenTime < level1Threshold -> DisplayLevel.NORMAL
            screenTime < level2Threshold -> DisplayLevel.WARNING  
            else -> DisplayLevel.ALERT
        }
        applyLevelConfiguration(level)
    }
}
```

### `Project Structure`

```
app/src/main/
├── java/com/example/screentimetracker/
│   ├── MainActivity.kt              # Main app entry point
│   ├── ScreenTimeService.kt         # Core tracking service
│   ├── SettingsActivity.kt          # Configuration interface
│   ├── AnalyticsActivity.kt         # Usage analytics
│   ├── InfoActivity.kt              # About and help
│   ├── AppSettings.kt               # Configuration constants
│   ├── BootReceiver.kt              # Auto-start functionality
│   └── UnsavedChangesDialog.kt      # Settings management
├── res/
│   ├── layout/                      # UI layouts
│   ├── drawable/                    # Icons and graphics
│   ├── values/                      # Strings and themes
│   └── xml/                         # Backup configurations
└── AndroidManifest.xml              # Permissions and components
```

### `Advanced Features`

#### Battery Optimization Handling
The app intelligently manages Android's battery optimization restrictions to ensure consistent operation across different device manufacturers and Android versions.

#### Auto-Start Integration
Seamless integration with system boot processes ensures the awareness system activates automatically without user intervention.

#### Multi-Device Compatibility
Comprehensive permission handling and fallback mechanisms ensure compatibility across various Android versions (8.0+) and device manufacturers.

### `Installation & Setup`

```bash
# Development setup
git clone https://github.com/Andebugulin/awareen.git
cd awareen

# Build and install
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```

### `Development Journey`

Creating Awareen has been an exploration into Android system-level programming, user behavior psychology, and sustainable app architecture. The project challenged me to:

- **Master Android services** and foreground service management
- **Navigate complex permission systems** across different Android versions
- **Design intuitive UX** for productivity-focused applications
- **Implement persistent overlay systems** that respect user privacy
- **Handle battery optimization** and auto-start complexities
- **Create flexible configuration systems** for diverse user preferences

The application successfully gathered over 100 users through organic distribution channels, demonstrating real-world demand for mindful technology solutions.

### `Impact & Distribution`

- **100+ active users** across multiple distribution channels
- **Signed release versions** with proper Android security compliance
- **Positive user feedback** on effectiveness for screen time awareness
- **Open source contribution** to digital wellness ecosystem

For detailed implementation and contribution:

- **[Awareen GitHub Repository](https://github.com/Andebugulin/awareen)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/awareen/contributors';
    const response = await fetch(url);
    const contributors = await response.json();

    const contributorsHtml = contributors.map(contributor =>
      `<div class="contributor" style="margin: 10px; text-align: center;">
        <img src="${contributor.avatar_url}" alt="${contributor.login}" style="width: 100px; height: 100px; border-radius: 50%; display: block; margin: auto;">
        <p><a href="${contributor.html_url}" target="_blank">${contributor.login}</a></p>
      </div>`
    ).join('');

    document.getElementById('contributors-list').innerHTML = contributorsHtml;
  }

  fetchContributors();
</script>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/awareen/contributors';
    const response = await fetch(url);
    const contributors = await response.json();

    const contributorsHtml = contributors.map(contributor =>
      `<div class="contributor" style="margin: 10px; text-align: center;">
        <img src="${contributor.avatar_url}" alt="${contributor.login}" style="width: 100px; height: 100px; border-radius: 50%; display: block; margin: auto;">
        <p><a href="${contributor.html_url}" target="_blank">${contributor.login}</a></p>
      </div>`
    ).join('');

    document.getElementById('contributors-list').innerHTML = contributorsHtml;
  }

  fetchContributors();
</script>

---

### `Download`

<div style="text-align: center; margin: 40px 0;">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.awareen2" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style="height: 80px;">
  </a>
</div>
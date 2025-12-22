---
layout: page
permalink: /thesis/
title: thesis
nav: true
nav_order: 2
---

# Bachelor's Thesis: WebAssembly vs JavaScript Performance

**Evaluating the performance of WebAssembly compared to JavaScript in CPU-intensive browser applications**

## Overview

This thesis investigates the performance differences between JavaScript and WebAssembly in computationally intensive browser applications, specifically focusing on image processing tasks.

### Key Findings

- **WebAssembly consistently outperformed JavaScript** across all tested scenarios
- Speedup factors ranged from **1.3x to 3.95x** depending on algorithm complexity
- WebAssembly showed **significantly better performance consistency** (up to 12x more stable)
- Performance advantages increased with computational complexity

### Algorithms Tested

1. **Color Inversion** (lightweight) - ~1.4x speedup
2. **Edge Detection with Sobel Operators** (medium) - ~1.9x speedup  
3. **K-Means Color Quantization** (heavy) - ~3.7x speedup

### Interactive Demo

Experience the performance differences yourself with the **live web application framework**:

[View Interactive Thesis Project](https://andebugulin.github.io/js-wasm-vis/)

The application allows you to:
- Upload your own images
- Run performance tests in real-time
- Compare execution times visually
- Explore detailed performance metrics

### Technical Details

- **Published**: 2025
- **Grade**: 4/5
- **Pages**: 40
- **Technologies**: JavaScript, Rust, WebAssembly, Canvas API
- **Testing Environment**: Chrome (V8 engine) on Linux

### Key Contributions

- Open-source web framework for performance testing
- Real-world performance analysis with visual feedback
- Comprehensive evaluation across multiple image sizes and formats
- Analysis of cold start overhead, scaling behavior, and consistency

---

**[Read Full Thesis (PDF)](https://urn.fi/URN:NBN:fi:amk-2025121737531)**
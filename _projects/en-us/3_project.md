---
layout: page
title: Ankara
description: An interactive tool utilizing spaced repetition and randomization for effective vocabulary learning.
img: assets/img/ankara.png
importance: 1
category: productivity 
---

## `Ankara` - Enhanced Flashcard Learning Tool

> An intelligent, data-driven vocabulary learning application with spaced repetition and comprehensive analytics. Unlike traditional flashcard applications, Ankara features three-sided cards and collects learning data for AI research applications.

### `Technology Stack`

Ankara is developed with modern Python technologies:
- `Python 3.8+` for core functionality
- `Pygame` for interactive GUI framework
- `Pandas` for data manipulation and analytics
- `gTTS` for text-to-speech functionality
- `Pathlib` for modern file handling
- `Langdetect` for automatic language detection

### `Key Innovation: Three-Sided Learning`

While most flashcard tools limit you to two-sided cards, Ankara provides a unique **three-stage learning approach**:

1. **Word** → See the vocabulary term
2. **Example** → Context before definition (optional intermediate step)
3. **Meaning** → Final definition reveal

This progression mimics natural language acquisition and allows learners to build context before seeing direct translations.

### `Key Bindings`

The application supports Vim-like key bindings for an intuitive and efficient learning experience:

#### Navigation
- `n` - Next word
- `p` - Previous word
- `0` - Skip 10 words forward
- `<` - Switch language for pronunciation manually
- `>` - Switch language for pronunciation manually

#### Card Views
- `f` - Show word
- `d` - Show meaning
- `s` - Show example
- `a` - Play pronunciation (auto-detects language)

#### Evaluation (Spaced Repetition)
- `h` - Mark word as "don't remember" (1)
- `j` - Mark word as "hard" (2)
- `k` - Mark word as "normal" (3)
- `l` - Mark word as "nice" (4)
- `i` - Mark word as "very impressive" (5)

#### System
- `ESC` - Save and exit

### `Optimized Hand Placement`

For the best user experience, we recommend positioning your hands as follows:

- **Left Hand**: Place your fingers on `A` `S` `D` `F` (ring → index fingers) for word interaction keys
- **Right Hand**: Place your fingers on `H` `J` `K` `L` (index → pinky fingers) for evaluation keys

This Vim-inspired layout minimizes hand movement and maximizes learning speed, while also helping you learn touch typing.

### `Page Layouts`

#### Instructions view 

<details>
    <summary>Instructions</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/instructions.jpg" title="Instructions" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Main Interface view 

<details>
    <summary>Main Interface</summary>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/main_interface.jpg" title="Main Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Project Architecture`

```
ankara.py                  # Main application script
requirements.txt          # Python dependencies
flashcard_data/
├── words.csv              # Main vocabulary database
├── config.json           # Application settings
└── backups/              # Automatic backup storage
    ├── words_backup_20241201_120000.csv
    └── words_backup_20241130_120000.csv
```

### `Advanced Features`

#### Data Analytics & AI Integration
- **Comprehensive Learning Metrics**: Track study time, accuracy, and progress patterns
- **Machine Learning Ready**: Generates datasets suitable for memory research
- **Performance Analytics**: Session statistics and long-term progress tracking
- **Export Capabilities**: Data ready for neural network training

#### Robust Data Management
- **Automatic Backups**: Scheduled backups with configurable retention
- **CSV-Based Storage**: Lightweight, portable, and version-controllable
- **Data Recovery**: Built-in backup restoration system
- **Performance Optimized**: Handles large vocabularies efficiently

#### Multi-Language Support
- **Automatic Language Detection**: For pronunciation features
- **Real-Time Text-to-Speech**: Supports multiple languages
- **Configurable Settings**: Customizable pronunciation language

### `Learning Analytics Data Structure`

The application collects comprehensive learning metrics per word:

```python
# Per-word analytics
- study_sessions: int      # Times studied
- total_study_time: float  # Cumulative study time
- correct_answers: int     # Successful recalls
- total_answers: int       # Total attempts
- accuracy_rate: float     # Success percentage
- class_progression: list  # Spaced repetition history
```

### `Configuration & Setup`

#### CSV Data Format
```csv
word,meaning,example
serendipity,pleasant surprise,Finding that book was pure serendipity
ephemeral,lasting very briefly,The ephemeral beauty of cherry blossoms
```

#### Application Settings
```json
{
  "auto_backup": true,
  "backup_interval_days": 7,
  "max_backups": 10,
  "last_backup": "20250912_143722",
  "pronunciation_language": "en"
}
```

### `Fancy Feature: Spaced Repetition and AI Research`

One of the key features of Ankara is its use of spaced repetition and comprehensive data collection. The application not only optimizes learning through proven educational techniques but also generates valuable datasets for AI research applications in:

- **Cognitive Science**: Memory and learning pattern analysis
- **Educational Technology**: Adaptive learning algorithm development  
- **Natural Language Processing**: Vocabulary acquisition modeling
- **Human-Computer Interaction**: Interface optimization studies

### `Installation & Usage`

```bash
# Clone repository
git clone https://github.com/Andebugulin/ankara.git
cd ankara

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Linux/macOS
# or venv\Scripts\activate # Windows

# Install dependencies
pip install -r requirements.txt

# Run application
python ankara.py
```

### `Conclusion and Reflection`

Developing the Enhanced Flashcard Learning Tool, Ankara, has been an enriching journey into the intersection of language learning, data science, and user experience design. This project allowed me to explore advanced concepts in educational technology while building practical skills in Python development, data analytics, and research-oriented software design.

The tool not only aids in vocabulary acquisition but transforms the learning process into a data-driven, scientifically-backed experience that's both enjoyable and efficient for learners and valuable for researchers.

For further insights and detailed implementation:

- **[Ankara GitHub Repository](https://github.com/Andebugulin/ankara)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/ankara/contributors';
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
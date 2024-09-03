# Melissa De Leon Portfolio website v.5
This is my personal portfolio website, showcasing my projects and skills as a web developer. Built with Jekyll and various tools, it features a sleek design and integrates functionalities like Google Analytics and SEO optimizations.

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
   - [Clone the Repository](#clone-the-repository)
   - [Install Ruby Gems](#install-ruby-gems)
   - [Install Node.js Modules (Optional)](#install-nodejs-modules-optional)
4. [Development](#development)
   - [Running the Local Server](#running-the-local-server)
   - [Gulp Setup](#gulp-setup)
   - [Additional Commands](#additional-commands)
5. [Configuration](#configuration)
6. [Building and Deployment](#building-and-deployment)
   - [Building the Site](#building-the-site)
   - [Deployment](#deployment)
7. [Directory Structure](#directory-structure)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)
10. [Technologies](#technologies)


## Overview
This guide provides detailed instructions for setting up, developing, and deploying the Jekyll portfolio. The site uses Jekyll along with various plugins for enhanced functionality.

## Prerequisites
* Ruby (version 2.7 or higher)
* Bundler
* Git (for version control)
* Node.js and npm (optional, if using JavaScript-based tools)

## Installation
### 1. Clone the Repository 
First, clone your Jekyll portfolio repository:

```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```
### 2. Install Ruby Gems
Make sure you have Bundler installed. If not, install it using:
```bash
gem install bundler
```
Install the required Ruby gems specified in the Gemfile:
```bash
bundle install
```
### 3. Install Node.js Modules (Optional)
If you are using JavaScript-based tools (e.g., Gulp), ensure Node.js and npm are installed. Then, install the required npm packages:
```bash
npm install
```

## Development
### Running the Local Server
To serve your Jekyll site locally, use:
```bash
bundle exec jekyll serve
```

### Gulp Setup
Gulp is used in this project to automate tasks like CSS and JS minification, image optimization, and live reloading. Below are the steps to set up Gulp and run tasks:

#### 1. Install Node.js Modules (If not already installed): Ensure Node.js and npm are installed. Then, install the necessary npm packages:
```bash
npm install
```

#### 2. Common Gulp Tasks:
- **Build and Minify JavaScript:**
  ```bash
  gulp js
  ```
  This task concatenates and minifies all JavaScript files in the src/js directory into assets/js/main.js.

- **Compile SASS to CSS:**
  ```bash
  gulp sass
  ```
  This task compiles SASS files from src/styles to CSS and minifies them into assets/css.

- **Optimize Images:**
  ```bash
  gulp imagemin
  ```
  This task minifies images from src/img and outputs them to assets/img.

- **Watch for Changes:**
  ```bash
  gulp watch
  ```
  This task watches for changes in source files and automatically runs the appropriate tasks and reloads the browser.

#### 3. Running Gulp with Jekyll: To run all tasks along with Jekyll and BrowserSync for development, simply execute:
  ```bash
  gulp
  ```

### Additional Commands
* Watch for changes and automatically rebuild:
```bash
bundle exec jekyll serve --watch
```
* Include draft posts:
```bash
bundle exec jekyll serve --drafts
```
* Specify a custom host or port:
```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8080
```

## Configuration
### _config.yml
The `_config.yml` file contains the site configuration settings. Update this file with your own settings and data:
```yaml
# Site settings
title: Melissa De Leon Portfolio Website - Version 5
description: Discover innovative Python projects by Melissa De Leon. Explore my Jekyll-powered portfolio showcasing dynamic web apps like CS50 Community Notes and the Django-based MyBank. Learn about my passion for Computer Science and Cybersecurity. Visit my GitHub to view code and connect.
baseurl: "" # Leave blank if hosted at root domain
url: "http://localhost:4000" # Update to actual site URL for production

# User settings
username: Melissa De Leon
user_description: Web developer with expertise in Javascript and Python Django framework
user_title: Web Developer
email: primavita19@gmail.com
twitter_username: melissadeleonx
github_username: melissadeleonx
linkedin_username: melissadeleonx

# Google Analytics
google-analytics:
  id: "G-76N2RZQFV6" # Replace with your actual Google Analytics ID

# Exclude files from Jekyll build
exclude:
  - package.json
  - src
  - node_modules
  - .git
  # - README.md # Uncomment if you want to exclude the README

# Permalink settings
permalinks:
  pretty: true

# Markdown settings
markdown: kramdown

# Plugins
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# Theme
theme: jekyll-theme-minimal

# Defaults
defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "default"


## Building and Deployment
### Building the Site
To build the site without serving it, use:

```bash
bundle exec jekyll build
```
This generates static files in the _site directory, which can be deployed to your hosting platform.

### Deployment
* **GitHub Pages:** Push your changes to the gh-pages branch or configure GitHub Pages in the repository settings.
* **Other Hosting Platforms:** Deploy the contents of the _site directory to your chosen hosting service.

## Directory Structure
### _includes/ 
Contains reusable HTML snippets. Great if you want to divide the pages in small sections and reuse the sections in various pages and layouts
### _layouts/
Contains layout templates for different types of pages.
### _posts/ 
Contains blog posts (if applicable).
### _data/
Contains YAML, JSON, or CSV files for site-wide data. The data is good for easy organization without touching the html code so much
### _site/
Output directory for the built site (auto-generated).

## Troubleshooting
Bundle Install Errors: Ensure Ruby and Bundler are properly installed.
Plugin Issues: Check the Gemfile for correct plugin versions and run bundle install again.

### Gulp

## Contributing
Feel free to open issues or submit pull requests if you find bugs or have suggestions for improvements.


## Technologies

- **Gulp:** Task runner used for automating tasks such as CSS minification and JavaScript bundling.
- **SASS:** CSS preprocessor used for styling the website.
- **Sweet Scroll:** Smooth scrolling library for enhanced user experience.
- **BrowserSync:** Tool for live reloading and synchronization during development.
- **Font Awesome and Devicon icons:** Icon libraries used for various visual elements.
- **Google Analytics:** Integrated for tracking site performance and user interactions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

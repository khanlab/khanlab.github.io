---
# Fields can be left blank! 
name: Snakebids
authors: 
  - Ali Khan
  - Peter Van Dyken
  - Tristan Kuehn
  - Jason Kai
short_description: An extension to Snakemake, a tool to create reliable and reproducible workflows, with a focus on working with organized neuroimaging data.  
image:
badges:
  - name: documentation
    icon: https://readthedocs.org/projects/snakebids/badge/?version=stable
    url: https://snakebids.readthedocs.io/en/stable/?badge=stable

  - name: version
    icon: https://img.shields.io/github/v/tag/akhanf/snakebids?label=version
    url: https://github.com/akhanf/snakebids

  - name: python
    icon: https://img.shields.io/pypi/pyversions/snakebids
    url: https://pypi.org/project/snakebids/

  - name: zenodo
    icon: https://zenodo.org/badge/309495236.svg
    url: https://zenodo.org/badge/latestdoi/309495236

# page settings:
layout: post
---

This package allows you to build BIDS Apps using Snakemake. It offers:

```
* Flexible data grabbing with PyBIDS, configurable solely by config file entries
* Helper function for creating BIDS paths inside Snakemake workflows/rules
* Command-line invocation of snakemake workflows with BIDS App compliance
* Configurable argument parsing specified using the Snakemake workflow config
* Execution either as command-line BIDS apps or via snakemake executable
```

**Full Documentation:** [here](https://readthedocs.org/projects/snakebids/badge/?version=stable){:target="_blank"}

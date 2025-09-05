---
# Fields can be left blank!
name: SPIMquant
authors:
  - Ali Khan
short_description: A Snakebids app for quantitative analysis of SPIM (lightsheet) brain data with automated nonlinear template registration and pathology quantification.
image: /assets/images/software/placeholder.png
badges:
  - name: documentation
    icon: https://img.shields.io/badge/docs-github-blue
    url: https://github.com/khanlab/SPIMquant/blob/main/README.md

  - name: version
    icon: https://img.shields.io/github/v/tag/khanlab/SPIMquant?label=version
    url: https://github.com/khanlab/SPIMquant

  - name: github
    icon: https://img.shields.io/github/stars/khanlab/SPIMquant?style=social
    url: https://github.com/khanlab/SPIMquant

# page settings:
layout: post
---

SPIMquant is a Snakebids app for quantitative analysis of SPIM (lightsheet) brain data. It performs automated nonlinear template registration and quantification of pathology from SPIM microscopy datasets.

## Features

- Deformable registration to a template 
- Atlas-based quantification of pathology 
- Coarse-grained and fine-grained parallelization using Snakemake and Dask
- Support for reading BIDS datasets directly from cloud-based object storage
- Support for simple and scalable cloud-based processing with Coiled

## Hardware Requirements

Processing lightsheet microscopy data is computationally-demanding, and you will need sufficient (and ideally fast and local) disk space. The more cores you have access to, the faster the code will run, but you will also need sufficient memory (e.g. 2-4 GB per core) as well.

## Software Requirements

A Linux machine with Singularity or Apptainer installed, and a recent version of Python (>= 3.10). The workflow will download any containers it requires to run non-python dependencies (c3d, greedy, ANTS).

## Installation

Install the package directly from GitHub:

```bash
pip install -e git+https://github.com/khanlab/spimquant#egg=spimquant
```

Or if you are going to make changes to the code, clone the repository then install it:

```bash
git clone https://github.com/khanlab/SPIMquant.git
pip install ./SPIMquant
```

## Usage

SPIMquant is a BIDS App, so you need a BIDS dataset containing SPIM (or lightsheet microscopy) data to use it. The [SPIMprep](https://github.com/khanlab/SPIMprep) workflow is the recommended tool to produce a BIDS dataset from your raw or minimally-preprocessed microscopy data.

Perform a dry run:
```bash
spimquant /path/to/bids/dir /path/to/output/dir participant -np --use-conda
```

Run the app using all cores:
```bash
spimquant /path/to/bids/dir /path/to/output/dir participant --cores all --use-conda
```

If your input BIDS dataset stores data in zarr zipstores (e.g. SPIM files ending in `*_SPIM.ome.zarr.zip`), then you should use the following option:
```
--filter-spim extension='ome.zarr.zip'
```

**Full Documentation:** [here](https://github.com/khanlab/SPIMquant/blob/main/README.md){:target="\_blank"}
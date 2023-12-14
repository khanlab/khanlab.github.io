---
# Fields can be left blank!
name: Hippunfold
authors:
  - Jordan DeKraker
  - Ali Khan
short_description: Automatically model the topological folding structure of the human hippocampus, and computationally unfold the hippocampus to segment subfields and generate hippocampal and dentate gyrus surfaces.
image: /assets/images/software/hippunfold.png
badges:
  - name: documentation
    icon: https://readthedocs.org/projects/hippunfold/badge/?version=latest
    url: https://hippunfold.readthedocs.io

  - name: version
    icon: https://img.shields.io/github/v/tag/khanlab/hippunfold?label=version
    url: https://github.com/khanlab/hippunfold

  - name: zenodo
    icon: https://zenodo.org/badge/282100834.svg
    url: https://zenodo.org/badge/latestdoi/282100834

  - name: docker
    icon: https://img.shields.io/docker/pulls/khanlab/hippunfold
    url: https://hub.docker.com/r/khanlab/hippunfold

# page settings:
layout: post
---

This tool aims to automatically model the topological folding structure of the human hippocampus, and computationally unfold the hippocampus to segment subfields and generate hippocampal and dentate gyrus surfaces.

The overall workflow can be summarized in the following steps:

![](https://raw.githubusercontent.com/khanlab/hippunfold/master/docs/images/hippunfold_overview.jpg){: width="100%" }

1. Pre-processing MRI images including non-uniformity correction, resampling to 0.3mm isotropic subvolumes, registration and cropping to coronal-oblique subvolumes around each hippocampus

1. Automatic segmentation of hippocampal tissues and surrounding structures via deep convolutional neural network U-net (nnU-net), models available for T1w, T2w, hippocampal b500 dwi, and neonatal T1w, and post-processing with fluid label-label registration to a high-resolution average template

1. Imposing of coordinates across the anterior-posterior and proximal-distal dimensions of hippocampal grey matter via solving Laplace's equation, and using an equivolume solution for laminar coordinates

1. Generating transformations between native and unfolded spaces using scattered interpolation on the hippocampus and dentate gyrus coordinates separately

1. Applying these transformations to generate surfaces meshes of the hippocampus and dentate gyrus, and extraction of morphological surface-based features including thickness, curvature, and gyrification index, sampled at the midthickness surface, and mapping subfield labels from the histological BigBrain atlas of the hippocampus

1. Generating high-resolution volumetric segmentations of the subfields using the same transformations and volumetric representations of the coordinates.

**Full Documentation:** [here](https://hippunfold.readthedocs.io/en/latest/?badge=latest){:target="\_blank"}

### Relevant papers:

- DeKraker J, Haast RAM, Yousif MD, Karat B, Lau, JC, Köhler S, Khan AR. Automated hippocampal unfolding, morphometry, and subfield segmentation with HippUnfold. eLife. 2022 Dec 15; 11:e77945. doi: [10.7554/eLife.77945](https://doi.org/10.7554/eLife.77945){:target="\_blank"}. PMID: 36519725.

- DeKraker J, Ferko KM, Lau JC, Köhler S, Khan AR. Unfolding the hippocampus: An intrinsic coordinate system for subfield segmentations and quantitative mapping. Neuroimage. 2018 Feb 15;167:408-418. doi: [10.1016/j.neuroimage.2017.11.054](https://doi.org/10.1016/j.neuroimage.2017.11.054){:target="\_blank"}. Epub 2017 Nov 23. PMID: 29175494.

- DeKraker J, Lau JC, Ferko KM, Khan AR, Köhler S. Hippocampal subfields revealed through unfolding and unsupervised clustering of laminar and morphological features in 3D BigBrain. Neuroimage. 2020 Feb 1;206:116328. doi: [10.1016/j.neuroimage.2019.116328](https://doi.org/10.1016/j.neuroimage.2019.116328){:target="\_blank"}. Epub 2019 Nov 1. PMID: 31682982.

- DeKraker J, Köhler S, Khan AR. Surface-based hippocampal subfield segmentation. Trends Neurosci. 2021 Nov;44(11):856-863. doi: [10.1016/j.tins.2021.06.005](https://doi.org/10.1016/j.tins.2021.06.005){:target="\_blank"}. Epub 2021 Jul 22. PMID: 34304910.

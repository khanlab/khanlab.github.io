---
# Fields can be left blank! 
name: Hippunfold
short_description: Automated unfolding of the hippocampus
image: 
github: https://github.com/khanlab/hippunfold

# page settings:
layout: post
---

This tool aims to automatically model the topological folding structure of the human hippocampus, and computationally unfold the hippocampus to segment subfields and generate hippocampal and dentate gyrus surfaces.

The overall workflow can be summarized in the following steps:

![](https://raw.githubusercontent.com/khanlab/hippunfold/master/docs/images/hippunfold_overview.jpg)

1. Pre-processing MRI images including non-uniformity correction, resampling to 0.3mm isotropic subvolumes, registration and cropping to coronal-oblique subvolumes around each hippocampus

1. Automatic segmentation of hippocampal tissues and surrounding structures via deep convolutional neural network U-net (nnU-net), models available for T1w, T2w, hippocampal b500 dwi, and neonatal T1w, and post-processing with fluid label-label registration to a high-resolution average template

1. Imposing of coordinates across the anterior-posterior and proximal-distal dimensions of hippocampal grey matter via solving Laplace's equation, and using an equivolume solution for laminar coordinates

1. Generating transformations between native and unfolded spaces using scattered interpolation on the hippocampus and dentate gyrus coordinates separately

1. Applying these transformations to generate surfaces meshes of the hippocampus and dentate gyrus, and extraction of morphological surface-based features including thickness, curvature, and gyrification index, sampled at the midthickness surface, and mapping subfield labels from the histological BigBrain atlas of the hippocampus

1. Generating high-resolution volumetric segmentations of the subfields using the same transformations and volumetric representations of the coordinates.

**Full Documentation:** [here](https://hippunfold.readthedocs.io/en/latest/?badge=latest){:target="_blank"}

### Relevant papers:

* DeKraker J, Haast RAM, Yousif MD, Karat B, Köhler S, Khan AR. HippUnfold: Automated hippocampal unfolding, morphometry, and subfield segmentation. bioRxiv 2021.12.03.471134; doi: [10.1101/2021.12.03.471134](https://doi.org/10.1101/2021.12.03.471134){:target="_blank"}

* DeKraker J, Ferko KM, Lau JC, Köhler S, Khan AR. Unfolding the hippocampus: An intrinsic coordinate system for subfield segmentations and quantitative mapping. Neuroimage. 2018 Feb 15;167:408-418. doi: [10.1016/j.neuroimage.2017.11.054](https://doi.org/10.1016/j.neuroimage.2017.11.054){:target="_blank"}. Epub 2017 Nov 23. PMID: 29175494.

* DeKraker J, Lau JC, Ferko KM, Khan AR, Köhler S. Hippocampal subfields revealed through unfolding and unsupervised clustering of laminar and morphological features in 3D BigBrain. Neuroimage. 2020 Feb 1;206:116328. doi: [10.1016/j.neuroimage.2019.116328](https://doi.org/10.1016/j.neuroimage.2019.116328){:target="_blank"}. Epub 2019 Nov 1. PMID: 31682982.

* DeKraker J, Köhler S, Khan AR. Surface-based hippocampal subfield segmentation. Trends Neurosci. 2021 Nov;44(11):856-863. doi: [10.1016/j.tins.2021.06.005](10.1016/j.tins.2021.06.005){:target="_blank"}. Epub 2021 Jul 22. PMID: 34304910.

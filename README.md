# khanlab.github.io (khanlab.ca)

The website built using Jekyll and Github pages. Organization of the website is 
structured such that each page's associated data has a corresponding folder (if 
necessary) under `_data` and _`assets` (for images). Page templates and common 
elements are stored in `_layouts` and `_includes` respectively.

See below for instructions on modifying each page. To modify or update a page, please make the necessary changes make a pull request to the repository!

## `join.html`

This page contains information regarding recruitment. In the pages front matter, it includes 2 variables `postdoc_recruit` and `grad_recruit` - setting these to `true`/`false` will update the page with associated information.

For post-doc opportunities, updating the associated spreadsheet in `join/postdoc.csv` will add different available positions.
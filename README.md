# Set Up
## Requirements
* node
* yarn
* Chrome browser

## Installation
`yarn`

# Operation
Tests can be run 2 ways:
1. Use the cypress test runner using the `yarn cypress:open`
2. Headlessly using the `yarn cypress:run` script

# Choice of technology
I decided to use Cypress IO due to the simplicity of creating a full automation framework quickly. The provided test runner made creating the tests cases easy

# Improvements
If given more time I would have created a page object model for some of these scripts. Some of the XPATHs that I have defined are directly in the scripts, moving them to a page object would allow XPATHs to be better reused in future tests.
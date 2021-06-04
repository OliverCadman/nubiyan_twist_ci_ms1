# Nubiyan Twist Website - Testing Details 

[Main README.md file](README.md)

# Table of Contents

* [Testing](#Testing)
    * [User Stories Testing](#User-Stories-Testing)
    * [Paths Through the Website](#Paths-Through-The-Website)
    * [Testing User Stories from UX Section of README.md](#Testing-User-Stories-from-UX-Section-of-README.md)

* [Manual testing of features on all pages](#Manual-testing-of-features-on-all-pages)
    * [Home Page](#Home-page)
    * [About Page](#About-page)
    * [Live Shows Page](#Live-Shows-Page)
    * [Video Page](#Video-Page)
    * [Shop Page](#Shop-Page)
    * [Contact Page](#Contact-Page)
    * [404 Page](#404-Page)

* [Lighthouse Testing](#Lighthouse-Testing)
    * [Home Page Results](#Home-page-Results)
    * [About Page Results](#About-page-Results)
    * [Live Shows Page Results](#Live-Shows-Page-Results)
    * [Video Page Results](#Video-Page-Results)
    * [Shop Page Results](#Shop-Page-Results)
    * [Contact Page Results](#Contact-Page-Results)
 

    * [Lighthouse Performance Issues](#Lighthouse-Performance-Issues)

    * [Lighthouse Best Practice Issues](#Lighthouse-Best-Practices-Issues)

* [Further Testing](#Further-Testing)

# Testing 

Both W3C Jigsaw CSS and HTML Markup Validators were used to check the validity of the source code:

- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)
- [W3C HTML Markup Validator](https://validator.w3.org/)

## User Stories Testing

### Paths Through the Website

This is the default path through the website:

Home > About > Live Shows > Video > Shop > Contact

However, for first time visitors browsing the home page, there are several links included that will take the user directly to specific parts and pages of the website. These buttons were included for users that may not have a specific goal when viewing the website, but may just like to browse, and visit the other pages on impulse.

The “Watch/Listen” call-to-action takes the user down the page to view featured videos. From there, after viewing the videos, the user has the option to watch more videos via the “Watch More Videos” button, or buy tickets to see the band live via the “See Our Live Show” button. Therefore a potential path a user could take is:

Home Page > Video

Home Page > Live Shows

Similarly, the home page’s album promotion section features two call-to-action buttons directly beneath the call-out promoting the band’s latest album release. The button “Download/Listen” is linked to a band camp page which opens in a new tab, and the other “Visit Our Shop” is link to the website’s shop. Therefore a potential path a user could take is:

Home Page > Shop

With this, the home page acts as the central hub of the website, from where the casual user’s attention could be re-directed to other parts of the website on impulse.

### Testing User Stories from UX Section of README.md

1. As a new visitor, I want to navigate through the website easily, so I can find what I need with efficiency.
   1. With a fixed navbar displayed on all pages, users on all screen sizes are always able to view the navigation and navigate around the website with minimum effort.
   2. A clickable logo is displayed in the navbar on tablet and laptop and in the dropdown navbar on mobile screen sizes, which always leads back to the site's home page.
   3. There are several call-to-action buttons on the home page, linked to the three pages expected to be most visited - Live Shows, Video & Shop.
   4. Visual feedback is provided with the use of underlines on active links in navbar, and with the use of hover effects on laptop and desktop screen sizes.

2. As a new visitor, I want to find and navigate through the merchandise section intuitively, so I can make any purchases with ease.
   1. Users are immediately presented with a collection on products on offer upon opening the page.
   2. The use of bootstrap cards with buttons provide organised presentation of the products, with a button provided inviting the user to investigate each product further.
   3. The use of modal windows provide the user with more information about the products, without overcrowding the main page.
   4. Each product's image, information and price is clearly displayed in their modal window.
   5. A button is included to invite the user to buy the product from Bandcamp, which opens the website in a seperate tab.

3. As a visitor interested in buying a record, I want to be able to preview the band's songs easily, so I can better determine if I want to make a final purchase.
   1. A call-to-action is clearly displayed in the home page, linked to the band's catalogue of records on bandcamp. This link opens in a new tab so the user isn't re-directed away from the main site.
   2. An embedded spotify player is included at the top of the shop page, so the user can listen to the band's latest record while browsing the shop page.

4. As a fan, I want to be able to sign up to a mailing list, so I can keep updated about new releases and upcoming shows/tours.
   1. A call-to-action to join the band's mailing list is clearly visible in the final section of the home page.
   2. A site-wide alert is clearly featured at the top of the Live Shows page on tablet and laptop screen sizes.
   3. For mobile devices, a second call-to-action is included at the bottom of the Live Shows page.

5. As a potential fan, I want to see footage of the band's live shows, so I can determine if it's worth spending money to see them live.
   1. A link to the band's 'Video' page is clearly visible in the navbar, with hover effects to provide visual feedback.
   2. The home page's hero image features a clearly visible call-to-action button, directing the user to featured videos on home page.
   3. Two feature videos are included in the home page, featuring the band playing live.
   4. Two final call-to-action buttons are included below the feature videos, inviting the user to visit the website's video page, or buy tickets to see the band live.

6. As a potential fan, I want to find testimonies from verified publications, so I can determine how much of a presence the band has.
   1. Five leading quotes are clearly displayed in the home page's album promotion section, with accompanying headers from relative sources.
   2. The website's 'About' page features a leading quote clearly displayed in the hero image, with accompanying source.

7. As a fan, I want to view a biography, so I can find out more about the history of the band and its members.
   1.  A link to the band's 'About' page is clearly visible in the navbar, with hover effects on laptop screen size to provide visual feedback.
   2. A history section is included in the website's 'About' page, with it's header being clearly visible when the user opens the page.
   3. Bootstrap cards are included, with a member of the band being featured in each card.
   4. A button is provided at the bottom of the card, opening a modal window displaying a more detailed summary of the band member's musical life, along with an accompanying video of the band member's work.

8. As a fan, I want to be able to easily navigate to and clearly view gig listings, so I can see if they are performing near me.
   1.  A link to the band's Video page is clearly visible in the navbar, with hover effects on laptop screen size to provide visual feedback.
   2. The band's gig listings are immediately displayed to the user upon opening the page, with the date, time, venue and ticket icon presented to user.
   3. The gig listings are displayed in a bootstrap table against a dark background with contrasting font, to maximise organisation and ease-of-use.
   4. On tablet and laptop screen sizes, the table is contained within a container of fixed height with scrolling functionality, so the user can browse with minimum visual noise.
   5. A hover effect is included in the ticket icon to provide further visual feedback to laptop users.

9. As a promoter/venue owner, I want to easily navigate to a contact form, so I can get in touch with the band/band representatives efficiently.
   1. A link to the band's 'Contact' page is clearly visible in the navbar, with hover effects on laptop screen size to provide visual feedback. 
   2. A bootstrap form is immediately presented upon opening the page. 
   3. The band's representative's contact details are included, with links that direct to the user's own emailing platforms.
   4. Clear visual indicators are provided by the inclusion of the representative's logos.

10. As a venue owner, I want to see how many of their shows have sold out, so I can be confident that my venue will be filled to capacity.
    1. Sold out shows are clearly indicated in the gig listings table, with strong lettering and white font contrasting the dark background of the table.

# Manual Testing of features on all pages 

Manual testing was undertaken on the following browser platforms:

* Google Chrome
* Apple Safari
* Mozilla Firefox

The website was tested using the developer tools of all relative browsers to ensure that it's responsiveness was consistent across all three browsers on all device sizes.

## Home Page:
1. Navigation Bar
   1. Go to home page on desktop, tablet and mobile.
   2. Change screen size from laptop to mobile to check if responsive navbar collapses to burger icon as intented.
   3. Check if navbar logo is not displayed on mobile screen sizes, but displayed in collapsible dropdown menu as intented.
   4. Hover cursor over logo to see if alt text appears - *alt text did not appear upon testing, so a title was added to the logo's div to account for this*.
   5. Check if navbar links respond to hovering - *initial idea of having the nav links change to orange colour lead to accessibility issues due to the colour of the background. Any colour which was successfully contrasting didn't complement the colour pallette of the website. Therefore an underline was chosen for hovering.

2. Jumbotron/Hero Image 
   1. Check if jumbotron header, leading quote and call-to-action button have sufficient contrast against background hero image - *initially, the contents of jumbotron were unfortunately centered directly on top of main subject of hero image. So on laptop and mobile devices, a bottom margin was added to jumbotron, and call-to-action button positioned towards the bottom of the hero image on. Tablet screen size is small enough for left and right positioning to be applied effectively, so background image was repositioned to the left. These changes created breathing space for the contents and the background image. The transparency of call-to-action button was also reduced to improve contrast of lettering.*
   2. Confirm that call-to-action button responds to hovering.
   3. Confirm that call-to-action button hyperlinks to the area of page intended.

3. Album Promotion Callout Section 
   1. Reduce screen size to confirm two social media links are hidden on tablet and mobile devices, as intended.
   2. Check there is no sentence breaking of call-out on laptop/desktop screen sizes - *Upon checking this on the Safari browser, there was a discrepancy between paddings between this browser and Chrome (which was being used to build the website). This caused an unwanted sentence break upon the final word ("Now!"). A small decrease in font-size was applied to callout to account for this.*
   3. Reduce screen size to confirm top-level testimony is not displayed on tablet and mobile devices.
   4. Confirm that featured videos respond to pressing play.
   5. Confirm that all the section's call-to-action are correctly linked, and respond to hovering.
4. Mailing List/Spotify Player Section 
    1. Reduce screen size to confirm "Listen on Spotify" badge collapses to full-width banner on mobile devices.

5. Footer
   1. Hover over each social media icon to check if they change colour upon hovering.
   2. Confirm that all icons in footer are correctly linked, and open in a seperate tab.
   3. Reduce screen size to confirm that band representative icons are hidden on tablet and mobile screen sizes.
   4. Confirm that social media icons decrease in font-size when screen size is changed, and footer looks good on all screen sizes.

6. Confirm that all contents of page are responsive, and maintain functionality on all screen sizes.

## About Page:
1. Navigation Bar
   1. Repeat verification steps taken in home page testing.
   2. Confirm the 'active' class is correctly assigned to relevant link in navbar.
   3. Confirm that HTML code is identical to html on all pages (apart from active links).

2. Hero Image/Quote/Summary Section 
   1. Reduce screen size to confirm that the leading quote decreases in font-size on mobile devices.
   2. Reduce screen size to confirm that summary text content maintains structural integrity, between different mobile screen sizes.
   3. Ensure there is no overflowing of text content on all screen sizes - *having a fixed height applied to hero image resulted in overflowing of text into section header below. Fixed height was removed to solve this.*
   4. Confirm that background image alt text appears when hovering cursor over section - *a title was added to the section tag in HTML code, to account for the inability to add alt text to image, since it's being generated by CSS.*

3. History Section 
   1. Reduce screen size to ensure the heading font and background image size decreases on mobile devices.
   2. Confirm that alt text is included for all images featured in section, and alt text appears when hovering over images - *as well as adding alt text to the img tags, for band images, a title was added to the wrapper divs in order for the alt text to appear when hovering.*
   3. Confirm that images of album covers increase in scale upon hovering.
   4. Reduce screen size to confirm that two images of band reduce in size on mobile devices.
   4. Reduce screen size to confirm that images of album covers decrease in size and maintain structural integrity on mobile devices.
   5. Ensure that text content is sufficiently contrasted against background colour.

4. 'The Band' Section
   1. Confirm that alt text appears when hovering over all images of band members in bootstrap cards.
   2. Hover over cards to ensure they increase in scale upon hovering.
   3. Confirm that the 'More Info' buttons open relative modal windows successfully.
   4. Confirm that every video in each modal plays smoothly.
   5. Confirm that the video featured in modal window stops upon closing modal.

5. Footer
   1. Repeat verification steps taken in home page testing. Confirm that HTML code is identical across all pages.

6. Confirm that all contents of the page are responsive and maintain functionality on all screen sizes.

## Live Shows Page:

1. Navigation Bar
   1. Testing already verified since HTML code is identical across all pages.
   2. Confirm the 'active' class is correctly assigned to relevant link in navbar.

2. Mailing List Alert Banner
   1. Confirm that alert banner is sufficiently cleared of navbar on laptop and tablet devices.
   2. Reduce screen size to confirm that alert banner is not displayed on mobile screen sizes.
   3. Hover over link to 'Join our Mailing List' to confirm it changes colour and increases in size on laptop and desktop screen sizes.
   4. Confirm that the link opens the relevant modal window.

3. 'Live Shows' Section
   1. Ensure the font-size of header matches the font-size and positioning of headers in 'About' page.
   2. Confirm the bootstrap table's overflow functionality works correctly on laptop/desktop and tablet devices.
   3. Hover over ticket icons to confirm it responds to hovering.
   4. Confirm that links assigned to ticket icons are not broken, and direct user to relevant ticketing site.
   5. Ensure that font-weight of text content is sufficient to read - *Font weight for text outlining venues looked good on all screen sizes when checking on devtools, however when viewing deployed site on mobile phone, the font seemed a bit too light and hard to read. Therefore the font-weight was increased from 200 to 300*.
   6. Confirm that image has alt text, and alt text displays upon hovering - *as well as having alt text added to img tag, a title was added to div wrapper to ensure the alt text is displayed upon hovering.*
   7. Confirm that the spotify player works correctly.
   8. Reduce screen size to confirm that image is not displayed on mobile screen sizes.
   9. Confirm that overflow is removed on mobile screen sizes, and fixed height is removed from table wrapper.

4. Footer 
   1. Testing already verified since HTML code is identical across all pages.

5. Confirm that all contents of the page are responsive and maintain functionality on all screen sizes. 

## Video Page:

1. Navigation Bar
   1. Testing already verified since HTML code is identical across all pages.
   2. Confirm the 'active' class is correctly assigned to relevant link in navbar.

2. Music Videos/Live Videos sections
   1. Ensure that heading font and background size matches the headers on previous pages, on all device sizes.
   2. Confirm that controls in all videos in sections are keyboard focusable.
   3. Confirm that all videos play correctly and smoothly.
   4. Confirm that all headings to videos have sufficient contrast against background and are readable on all device sizes.

3. Footer
   1. Testing already verified since HTML code is identical across all pages.

4. Confirm that all contents of the page are responsive and maintain functionality on all screen sizes. 

## Shop Page: 

1. Navigation Bar
   1. Testing already verified since HTML code is identical across all pages.
   2. Confirm the 'active' class is correctly assigned to relevant link in navbar.

2. Music Shop Section
   1. Ensure that heading font and background size matches the headers on previous pages, on all device sizes.
   2. Confirm spotify player is clearly displayed, and functions correctly on all devices.
   3. Confirm that all images in item cards are displayed successfully.
   4. Hover over item images in cards to confirm alt text appears on hovering - *similarly to the images in the 'About' page and 'Live Shows' page, titles were added to the divs containing images, in order for the alt text to appear when hovered over.*
   5. Hover over card's 'More Info' buttons on laptop to confirm that colours change as expected.
   6. Click on all cards' 'More Info' buttons to confirm they open the relevant modal windows.

3. Clothing Shop Section 
   1. Ensure that heading font and background size matches the headers on previous pages, on all device sizes - *the font size for the header to 'Clothing/Prints' section had to be reduced as retaining the same font size resulted in the text spilling into background logo image*.
   2. All testing undertaken on 'Music Shop' item cards was also taken on 'Clothing/Prints' item cards.

4. Item Modal Windows
   1. Confirm that images are displayed in all modal windows, and all images relate to the images shown in their relative bootstrap cards.
   2. Confirm that all text content is contrasted sufficiently against background.
   3. Hover over images to confirm alt text displays successfully - *again, titles were added to the each image's containing div in order to display alt text on hovering*
   4. Click each 'Buy-From-Bootcamp' button to confirm there are no broken external links, and each link opens up in a seperate tab/window.
   5. Click Close button and on main page (anywhere but the modal window) to confirm the modal window closes as expected.
   6. Hover over 'Buy from Bootcamp' and 'Close' buttons to confirm they respond as expected - *the difference in border thickness resulted in the modal window expanding slightly when the buttons were hovered over. Border thickness was changed to match the thickness of button's borders before hovering*
  

6. Footer
   1. Testing already verified since HTML code is identical across all pages.

7. Confirm that all contents of the page are responsive and maintain functionality on all screen sizes.
   
## Contact Page:
1. Navigation Bar
   1. Testing already verified since HTML code is identical across all pages.
   2. Confirm the 'active' class is correctly assigned to relevant link in navbar.

2. Contact Form Section 
   1. Confirm that all content in the section are centered correctly on all devices.
   2. Ensure there is sufficient contrast between background image and content in foreground.
   3. Click Submit button before entering text in input fields to confirm that 'required' attribute functions correctly - *the text area class wasn't responding as expected, and it was discovered that there was some space between the opening and closing tags, this space was removed in order to make the functionality respond correctly.*
   4. Reduce device size to confirm that band representative's contact information moved below the contact form on mobile device sizes, and representative's logos reduce in size.
   5. Hover over buttons and email links to confirm that colours change as expected.

6. Footer
   1. Testing already verified since HTML code is identical across all pages.

7. Confirm that all contents of the page are responsive and maintain functionality on all screen sizes.

## 404 Page

1. Type a non-existent destination in the URL to confirm 404 page displays upon trying to access page.
2. Confirm all content is clearly displayed and centered on all device sizes.
3. Confirm the logo link takes the user back to the website's home page.

# Lighthouse Testing

Google Chrome’s ‘Lighthouse’ extension for its DevTools feature was used to test the website’s Performance, Accessibility, Best Practices and Search Engine Optimisation. Listed below are the latest reports from Lighthouse’s run of testing:

## Home Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-home.png" width="500" alt="Screenshot of Lighthouse Testing on Home Page">

## About Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-about.png" width="500" alt="Screenshot of Lighthouse Testing on About Page">

## Live Shows Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-liveshows.png" width="500" alt="Screenshot of Lighthouse Testing on Live Shows Page">

## Video Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-videos.png" width="500" alt="Screenshot of Lighthouse Testing on Video Page">

## Shop Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-shop.png" width="500" alt="Screenshot of Lighthouse Testing on Live Shop Page">

## Contact Page Results
<img src="https://github.com/OliverCadman/nubiyan_twist_ci_ms1/blob/master/assets/images/testing-images/lighthouse-contact.png" width="500" alt="Screenshot of Lighthouse Testing on Contact Page">

### Lighthouse Performance Issues

While all of the pages Accessibility and Search-Engine-Optimisation points scored relatively optimally throughout all pages of the website, there were issues when it came to Lighthouse’s scoring on the performance of these pages:

Home Page Performance - 61%

About Page Performance - 67%

Live Shows Page Performance - 89%

Video Page Performance - 85%

Shop Page Performance - 87%

Upon investigating, it was found that the chief culprit of this relatively low score were the images used in the website. Upon discovering this, the developer made great efforts to do what they could to reduce the file sizes of these images:

* Home Page Hero Image
* About Page Hero Image
* Contact Page Hero Image
* All images displayed in shop page

While this did improve each page’s performance, Lighthouse was still registering an average score between 61 and 80. 

Furthermore, the developer attempted to add a “sizes” attribute to the image tags displaying the band members in the ‘About’ Page’s History section, with the hopes that this would improve performance through having a collection of images of different sizes for the browser to choose from when rendering the code onto the page. However, this didn’t make any significant to the improvement of the page’s performance. Upon investigating further still, the developer found good information on how to correctly implement ‘sizes’ and ’srcsets’, from the website CSS-Tricks. However, it is beyond the current skill-set of the developer to accurately and efficiently add this to his HTML and CSS Code, as the recommendations CSS-Tricks gave involve CSS grid-templates, and using ‘calc()’ rules, which the developer isn’t familiar with as-of-yet.

On top of this investigation, the developer added a lazy loading attribute to each image and video tag that were displayed further down each page. This seemed to improve the score marginally, but not enough to make a significant improvement to Lighthouse’s performance score.

As the developer learns more and improves his skill-set, changes will be made to the website in future, in order to maximise its performance result.

### Lighthouse "Best Practices" Issues

There were also issues in Lighthouse's score in the category for Best Practices. These principally stemmed from the Bootstrap Javascript libraries which were used to build the website, as well as many issues which read "Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute". Unfortunately, it is beyond the current scope of the developer's skillset to address these issues in a timely manner, but it is their intention to improve on this area as their journey in web development progresses.

# Further Testing

1. Tested all pages on my mobile and laptop device after deploying website to GitHub pages.
2. Asked family to check website on their tablet device, as I am not in ownership of a tablet. They reported no issues.

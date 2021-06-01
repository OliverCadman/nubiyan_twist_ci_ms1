# Nubiyan Twist Website - Testing Details 

[Main README.md file](README.md)

## Testing 

Both W3C Jigsaw CSS and HTML Markup Validators were used to check the validity of the source code:

- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)
- [W3C HTML Markup Validator](https://validator.w3.org/)

### User Stories Testing

##### Paths Through the Website

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
   2. The use of bootstrap cards with buttons provide organised presentation of the products.
   3. The use of modal windows provide the user with more information about the products, without overcrowding the main page.
   4. A basket information window is provided, which shows the user how many products they have selected.
   5. A collapsible basket window is shown upon clicking 'View Your Basket' window, providing the user the option to review their products, while keeping visual noise to a minimum.
   6. Users have the option to remove items from their basket via the "Remove" button.
   7. A modal window is included with a bootstrap form for the user to input their details. Placeholder text is included to provide visual indicators about the details required from the user.

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

### Manual Testing of features on all pages 

##### Home Page
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



  
  








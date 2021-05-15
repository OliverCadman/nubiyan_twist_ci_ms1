<h1 align="center">NUBIYAN TWIST</h1>

Welcome to Nubiyan Twist's website! 

A comprehensive website for the 9-piece contemporary UK Jazz collective based in London, United Kingdom. 
The website features listings for upcoming shows and tours, audio/video clips showcasing their music both live and in-studio,
a biography detailing the history of the group and it's members, a merchandise section for both fans and record collectors,
and a contact page.

While the website is designed to immediately draw the user's attention to the captivating, virtuosic live shows
that the group is notorious for, it will also serve as an online hub where record collectors and DJs can
preview and purchase albums and EPs from the group's catalogue. 

The business goals of this website are:

* Establish Nubiyan Twist as a trusted brand to promoters and venue owners.
* Compell fans/potential fans to purchase tickets for the group's live shows.
* Grow the group's fanbase.
* Encourage the sale of records and EPs to collectors, DJs and fans.
* Reinforce brand awareness to all users of the website.
* Provide excellent UX to keep users on the site long enough to make a purchase.

The user goals of this website are:

* Easy, intuitive navigation through the website's pages and content.
* Keep up-to-date on upcoming live shows and tours.
* Discover new releases/promotional offers.
* Learn more about the group's identity and history.

# UX

## Target Audience

**The website's target audience are**:

* Fans/potential fans
* Record Collectors/DJs
* Promoters/Venue owners

While the focus of the website should serve the needs of each of these criteria, the website should primarily cater to those who:

* Have disposable income
* Actively engage with the contemporary music scene both in the UK and overseas.

## User Stories

1. Fans/potential fans:
    1. As a fan, I want to be able to easily navigate to and clearly view gig listings, so I can see if they are performing near me.
    2. As a new fan, I want to be able to sign up to a mailing list, so I can keep updated about new releases and upcoming shows/tours.
    3. As a potential fan, I want to see footage of their live shows, so I can determine if it's worth spending money to see them live.
    4. As a fan, I want to view a biography, so I can find out more about the history of the band.

2. DJs/Record Collectors:
    1. As a DJ, I want to find testimonies from verified publications, so I can determine how much of a presence the band has.
    2. As a record collector, I want to be able to easily preview songs, so I can determine if their records are worth purchasing.
    3. As a record collector/DJ, I want to find and navigate through the merchandise section intuitively, so I can make any purchases with ease.
    4. As a record collector, I want to see images of the band's vinyls and sleeves, so I can gauge the visual aesthetics of the records.
    5. As a DJ, I want to know who the band have collaborated with, so I can better curate my setlists that I will feature the band on.

3. Promoters/Venue Owners:
    1. As a promoter/venue owner, I want to easily navigate to a contact form, so I can get in touch with the band/band manager efficiently.
    2. As a venue owner, I want to see footage/photos of the band's live shows, so I can see how many people they will bring into my venue.
    3. As a promoter, I want to be able to easily find which promoters/labels the band are affiliated with, so I can determine the band's presence in the music industry.
    4. As a venue owner, I want to easily navigate to the band's gig listings, so I can gauge how active the band are in the live music scene.
    5. As a venue owner, I want to see how many of their shows have sold out, so I can be confident that my venue will be filled to capacity.

## Wireframes

[Home](assets/wireframes/nt-homepage.pdf)

[About](assets/wireframes/nt-about.pdf)

[Live Shows](assets/wireframes/nt-liveshows.pdf)




# Features


Each page features a responsive navigation bar, with a clickable logo icon positioned on the left (featured on desktop and tablet screen sizes, and hidden on mobile screen size). The font chosen for the navigation links is "Alatsi" from Google Fonts, and the color "Sinbad" (#9ad0c0) was chosen for the navbar's background. These choices were made as they represent the styling used on the album cover for Nubiyan Twist's latest release 'Freedom Fables', and so reinforces brand recognition, and promotion of the band's latest album.

Each page features a footer, with clickable links to the band's social media platforms (styled with FontAwesome icons). Icons of the band's label and booking agents are featured on large screen sizes, and are hidden on tablet and mobile screen sizes.

Every page also features a hero image at the top, covering almost the whole screen height and width. The images used for the hero image include black and white photographs of the band playing live, and cover art for the band's latest single releases.

## Home Page

The home page features a hero image at the top; a black and white photograph of the band playing live, with an added kaleidescope effect. This is featured on all screen sizes, and it's purpose is to provide a visual impact on the user, and to portray an element of sophistication and class.

Below the hero image is a section promoting the band's latest release "Freedom Fables". A header is included, detailing that the latest release is available now, and above the header are FontAwesome icons that are linked to the relative streaming and downloading platforms. As well as  the FontAwesome icons, there is a large call-to-action button encouraging the user to listen to or download/buy the album from BandCamp. A hover effect is added to both the FontAwesome links and the call-to-action to provide visual feedback to the user. 

Below the header is a central image of the album art of "Freedom Fables" with quotes from notable music publications featured on either side of the image. 

At the end of the section are two feature videos of the band playing live, playing a selection of two songs from the latest release.

The final section features a call-to-action to join our mailing list (targetting a modal window), with the content outlining a promotional offer, in a bid to encourage further loyalty from the user to the band and their brand. Next in the section is an embedded spotify player featuring the band's latest release, accompanied with an image encouraging the user to "listen on spotify". This image is in the form of a badge on Desktop/Laptop and Tablet screen sizes, and collapses down to a full-width banner on mobile screen size. A fixed background was chosen for the section, displaying an image of another of the band's latest single releases, named "Flow". This choice was made to further encourage brand recognition.

## About Page

Similarly to the Home Page, the top of the about page features another black and white photograph of one of the band's live shows. This is a wide angle shot of the band, from above, in an attempt to feature as many of the band's members as possible and encapsulate the presence of the band live on-stage. A testimony from a publication is featured in large font size (decreased to a smaller font size on tablet and mobile screen sizes). Below the testimony is a brief summary of the band and their ethos, positioned in empty areas of the hero image, so as not to obstruct any band members or instruments, as best as possible.

The next section features a comprehensive, detailed history of the band and it's catalogue of releases. Clickable circular images of their album art is featured when the relative album is mentioned through the history of the band. They are linked to bandcamp pages, which open in seperate tabs/windows. The clickable images are made from two circles layered with z-index, to draw the user's attention. Between the first two images is a call-to-action "Click to Listen", to provide visual feedback to the user. The choice was made to include this call-to-action only once, between the first two album cover images, as there was a risk of the section looking too busy otherwise.

The final section features the core members of the band, in the form of bootstrap cards. Each card features an image of the band member, their name and instrument, and a clickable button which opens a modal window detailing a brief summary of their role in the band, and details of their other projects. Each modal window features an embedded video of the relative band member's work, either with the band or in one of their other projects, and a button to close the window. Users may also close the modal by clicking the outside the window. Basic JavaScript has been included in order to stop the embedded video playing upon closing the modal window, so the user doesn't have to stop the video before closing the window, therefore providing better UX.

## Live Shows

## Shop 

## Contact


# Design

## Colour Scheme

The two primary background colours used in the website are:

* (#9ad0c0) - This colour is a light, pastel shade of cyan, and was chosen based on it's association with the colour scheme used for the band's latest album release "Freedom Fables". Furthermore, the intention behind using this colour is to invoke a pleasant, positive emotional response from the site user. The colour is used as the background colour for both the navigation bar and the footer, on all pages. 

* (#dcb3ac) - This colour is a light, pastel shade of red, bordering on pink, and was chosen simply to complement the colour selected for the navigation bar and the footer. 


Font Colours include:

* Orange (#f48826) - This colour is used only for top-level headings, where the background is a black and white hero image. 

* Charcoal (rgb(70,70,70)) - This colour is used for the fontawesome icons used in the social media links on the Home Page. This colour was chosen to complement the light red (#db3ac) colour used as the relative section's background, and in turn provide accessibility in the form of colour contrast.

* Black - This colour is used also to ensure maximum accessibility and contrast against the relatively bright colours used for the backgrounds. This colour is also used when the site user hovers over any of the fontawesome social media icons.


# Testing 

## Testing fan/potential fan stories from UX section of README.md file

1. As a fan, I want to be able to easily navigate to and clearly view gig listings, so I can see if they are performing near me.
    1. As each page features a navigation bar with a bright background and dark, constrasting font colour, fans will be able to access a list of the band's live shows regardless of which page of the website they are viewing.

2. As a new fan, I want to be able to sign up to a mailing list, so I can keep updated about new releases and upcoming shows/tours.
    1. The home page features a call-to-action to sign up to the band's mailing list, which is placed specifically to contrast against the dark colour of the fixed background image. A FontAwesome icon is also used to provide visual feedback.


3. As a potential fan, I want to see footage of their live shows, so I can determine if it's worth spending money to see them live.
    1. The Home page features two embedded videos of the band playing live, positioned side by side on laptop/desktop and tablet screen sizes, and stacked vertically on mobile screen size. The videos are sized to be as large as possible, so as to draw attention to the user without crowding the section. The videos were placed strategically on the home page as the user is most likely to inspect this page first, upon visting the website for the first time.

4. As a fan, I want to view a biography, so I can find out more about the history of the band.
    1. The About Page features a detailed history of the band, and the font colour for this content chosen to contrast against the light red/pink background. 
    2. The About Page also features bootstrap cards for each member of the band, with an image, their name, role in the band, and a button opening a modal window with relative embedded videos featured. Custom CSS is implemented to smoothly scale the cards up a small amount when the user hovers the cursor over each card.


    


        







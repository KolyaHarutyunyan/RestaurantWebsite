import {SVGNames} from "@eachbase/constants"
export const header = {
  contactInfo: [
    {
      icon: "location_on",
      body: "7179 Foothill Blvd, Tujunga, CA 91042"
    },
    {
      icon: "email",
      body: "events@aurorabanquethall.com"
    },
    {
      icon: "schedule",
      body: "9am - 5pm (tuesday - sunday)"
    }
  ],
  logo: {
    src: "/assets/images/Logo.svg",
    alt: "Logo"
  },

  title: "Menuz"
}
export const  pageLinks = [
  {
    title:"Restaurant Verify",
    url: "/restaurant",
    icon: SVGNames.Restaurant
  },
  {
    title:"Account Settings",
    url: "/profile",
    icon: SVGNames.Profile
  }
]
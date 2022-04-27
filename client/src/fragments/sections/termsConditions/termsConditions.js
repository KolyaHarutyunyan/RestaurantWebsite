import {Container} from "./style";

export const TermsConditionsSection = () => {
    return (
        // <Container>
        //     <p>
        //         <ul>
        //             <li className={'firstTitle'}>Home Page</li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Hero</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Build Free Interactive QR Menus</li>
        //         </ul>
        //         <ul>
        //             <li className={'last'}>No more paper or PDF QR menus that are static and hard to change and manage.
        //                 Let your customers scroll through your menu, click and interact with the menu items.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>How to Enhance your business > change to: Enhance Your Customer
        //                 Experience
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Quick and Easy Account Creation</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Creating an account takes a minute and allows you to start building
        //                 your FREE menu right away. There are no hassles or spam sent to your email. With an account you
        //                 can always log back in to make adjustments to your menus and publish new ones.
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Easy to Use Menu Builder</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Our menu builder is easy to use and doesn’t require hours of training.
        //                 Our two main areas of focus are ease of menu creation and ease of use for the customer.
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Interactive Digital Menus</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Customers can scroll through menu items, click through to see images
        //                 and other more detailed information. No more zooming in and out with your phone and dealing with
        //                 PDF menus.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>How your digital menus will look like > change to: How Your Menu Will
        //                 Look
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Once the menu is scanned via QR code on the table your menu will appear.
        //                 The menu will be fully interactive and clickable containing titles, ingredients and images of
        //                 the menu items. Once the menu item is clicked, the customer is directed to the Menu Item Detail
        //                 page where they can see more details about the item such as ingredients. MenuMango is simple and
        //                 intuitive to use.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>How it works</li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Create an Account</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Account creation takes less than a minute and allows you to create,
        //                 store and manage your menus in the future.
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Create Menus</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Add and create different menus all of which are accessed through one QR
        //                 code placed on your table. Simply activate a menu of choice.
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Add Menu Item Information</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Add some basic information about your menu items such as titles and
        //                 ingredients to provide transparency to your customers.
        //             </li>
        //         </ul>
        //         <br/>
        //
        //         <ul>
        //             <li className={'firstTitle'}>Create Food and Drinks Categories > change to: Create Food and Drink
        //                 Categories
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Creating/editing categories is quick, simple and easy within the
        //                 administrator dashboard. You can first add all of the categories then fill in menu items or add
        //                 categories as you go.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>Add Menu Items</li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Add menu items with pictures, a title and some basic information about
        //                 the dish. The items will be saved and can later be accessed and transferred to other menus so
        //                 won’t need to redo any work.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>Categorize Menus and Menu Items > change to: Recent Restaurants Using
        //                 Our Menus
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>The list of companies using our new dynamic and interactive menus is
        //                 growing. Our clients are not just customers, but people who we are building a long term
        //                 relationship with. We are constantly listening and improving.
        //             </li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>Modals</li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}> Create Menu > on the bottom write</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Don’t have an account? Sign up!</li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'subTitle'}>Create Menu and Log In Modals</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Remove “Welcome to Menuz”</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Insert: “Sign Up for” then the logo on the bottom</li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>Bottom of the page</li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Add Menu FREE > Change to: Add Free Menu</li>
        //         </ul>
        //         <br/>
        //         <ul>
        //             <li className={'firstTitle'}>Recent Restaurants Using Our Menus > change to > Popular Menu Items
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'subTitle'}>Here are a few popular menu items with high resolution pictures that grab
        //                 the customers attention. Using clear images for food presentation is one of the most important
        //                 aspects of your menu.
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Lets add a few deserts, drinks, coffee/latte, food items (appetizers,
        //                 entrees...etc.)
        //             </li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Shrimp pasta</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>California Roll</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Ice Cream Sundae</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Mojito</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Margarita</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Kabob</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Seafood Platter</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Fish and Chips</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Boba</li>
        //         </ul>
        //         <ul>
        //             <li className={'thirdTitle'}>Cappuccino</li>
        //         </ul>
        //
        //     </p>
        // </Container>


        <Container>
            <p>
                <p className='boldTitle'>Terms & Conditions of www.menumango.com</p><br/>
                <p className='title'>Site Availability</p><br/>

                All reasonable measures are taken by our team to maintain and keep the site up and running, however some
                the site may experience some downtime.<br/><br/>
                When possible, an advance warning will be shared with our users prior to the site being taken down, but
                we shall not be obliged to provide such a notice.<br/><br/>
                <p className='title'>Use of Website</p><br/>
                This Website may be used for your own private purposes and in accordance with these terms of
                use.<br/><br/>
                Reproduction, copying or downloading content including graphics, icons and artwork is strictly
                prohibited without prior written consent.<br/><br/>
                <p className='title'> Disclaimer</p><br/>
                While we work towards keeping all information on the Website up to date and accurate, we do not
                guarantee the validity and accuracy on the material presented on our Website.<br/><br/>
                The material contained on this Website is provided without any warranty of any kind. Use the material on
                this Website at your own discretion.<br/><br/>
                <p className='title'>Exclusion of Liability</p><br/>
                We do not accept liability for any loss or damage that you suffer as a result of using this
                Website.<br/><br/>
                Nothing in these Terms of Use shall exclude or limit liability for death or personal injury caused by
                negligence which cannot be excluded or under the law of the United States of America.<br/><br/>
                <p className='title'> Law and Jurisdiction</p><br/>
                These terms of use are governed by U.S laws. Any dispute arising in connection with these terms of use
                shall be subject to the exclusive jurisdiction of the Courts of the state of California.

            </p>
        </Container>
    )
}
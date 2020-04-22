import React, { Component } from "react"

import "../../styles/main.css";

class MasterForm extends Component {
    render() {
        return (
            <div>
                <section class="contact-form become-coach">
                    <div class="container">
                        <div class="text-area">
                            <h2 class="h1 heading-border lowercase">Become a Master Coach.</h2>
                            <h3>Want to explore the possibilities?</h3>
                            <p>If you are interesting in becoming a Master Coach, connect with us to discuss the partnership.</p>
                            <a href="#" class="btn">Connect with Us</a>
                        </div>
                        <form action="#" class="form-area">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input id="name" class="form-control" type="text" placeholder="Enter your name..." />
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input id="email" class="form-control" type="email" placeholder="Enter your email..." />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input id="phone" class="form-control" type="text" placeholder="Enter your phone..." />
                            </div>
                            <div class="form-group">
                                <label for="note">Notes:</label>
                                <textarea id="note" class="form-control" placeholder="Enter your notes..." ></textarea>
                            </div>
                            <div class="form-group">
                                <label for="contact">Best time to contact:</label>
                                <div class="input-row">
                                    <input id="contact" class="form-control" type="text" placeholder="04-04-2020" />
                                    <input class="form-control" type="text" placeholder="10:00 AM" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section class="banner-section banner2" style={{ backgroundImage: "url(images/img39.jpg)" }}>
                    <div class="container">
                        <div class="text-area">
                            <h2 class="h1 heading-border lowercase">Value for a Master Coach?</h2>
                            <p>With each of our Master Coaches, we form a close partnership to exchange value and to enhance our relationship. The Be Bold platform provides
                            Master Coaches and a way to expand their brand and increase their client base. It also provides a comprehensive set of tools that the Master Coaches can use to structure their lessons, outline actionable tasks and
                            coach in an actionable manner with better progress tracking and
                            communication with their members. As a Master Coach, you will get the added benefit of being a part of the Be Bold brand and platform and
                            attaining the benefits from the Be Bold’s marketing and exposure. All
						Master Coaches will also have access to our marketing channels, to create</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MasterForm;

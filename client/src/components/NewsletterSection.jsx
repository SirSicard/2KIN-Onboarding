function NewsletterSection() {
    return (
        <section>
            <h2>Newsletter</h2>
            <p>Sign up for our newsletter to receive the latest news and updates</p>
            <form>
                <input type="email" id="email" name="email" placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </form>
        </section>
    )
}

export default NewsletterSection;
import '../styles/newsletter.css';

function NewsletterSection() {
    return (
        <div className='news-section'>
            <h2 className='news-title'>Newsletter</h2>
            <p className='news-paragraph'>Sign up for our newsletter to receive the latest news and updates</p>
            <form className='news-form'>
                <input type="email" id="email" name="email" placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterSection;
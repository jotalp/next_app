import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function ContactForm() {
    return (
        <>
            <Head>
                <title>Contact Form</title>
                <meta name="description" content="Contact form" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <h1>Contact Us</h1>
                    <p>Fill out the form below to get in touch.</p>
                </div>

                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
}

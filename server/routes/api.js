
const dotevnv = require('dotenv');
dotevnv.config('./env');

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.gemini_app_key);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
exports.generateContent = async (req, res) => {

    console.log(req.body);
    prompt = req.body.promptText;
    //const reuslt = await model.generateContent(prompt);
    ///const response = await reuslt.response;
    // console.log(response.text())
    const respdata = `3. **The Rolling Stones:** The quintessential blues-rock band, known for their swagger, rebellious spirit, and enduring hits. They continue to be one of the biggest live acts in the world.

    4. ** Pink Floyd:** Pioneers of progressive rock, known for their epic, concept - riven albums, innovative sound, and psychedelic experimentation.Their music is often praised for its complexity and emotional depth.

5. ** Queen:** A flamboyant and theatrical rock band with a unique blend of hard rock, operatic vocals, and progressive elements.Their music continues to be celebrated for its grandeur and enduring appeal.

6. ** The Who:** Known for their energetic live performances, powerful music, and innovative use of technology.Their rock operas and anthems have become iconic parts of rock history.

7. ** AC / DC:** The quintessential hard rock band, known for their raw energy, powerful riffs, and catchy songs.Their music has become synonymous with high - octane rock 'n' roll.

8. ** The Doors:** Led by the enigmatic Jim Morrison, their music blended blues, rock, and psychedelic elements, creating a unique and influential sound.Their lyrics explored themes of spirituality, sexuality, and rebellion.

9. ** U2:** An Irish rock band known for their anthemic songs, Bono's powerful vocals, and commitment to social activism. Their music has resonated with millions worldwide.

    10. ** Radiohead:** A British band known for their experimental, intellectual, and challenging music.They have been praised for their innovative use of electronic instruments and their thought - provoking lyrics.

This list is just a starting point, and many other fantastic rock bands could be included.Ultimately, the "top" rock bands are those that resonate most with you personally.

{ promptText: 'suggest me some apis for getting books info\n' }
## APIs for Getting Book Information:

Here's a selection of APIs designed for retrieving book information, categorized by their strengths:

        ** 1. Comprehensive and Feature - Rich:**

* ** Google Books API:** A powerful API offering a wealth of information about books, including summaries, reviews, author details, ISBNs, and even full text in some cases.Supports searching by title, author, ISBN, and more.
    * ** Pros:** Comprehensive data, robust search capabilities, free tier available.
    * ** Cons:** Can be slow for large requests, some data may be incomplete.
* ** Open Library API:** A free and open - source API powered by the Internet Archive, offering rich metadata about books, including covers, editions, and author information.
    * ** Pros:** Extensive data, completely free, open - source nature fosters community contributions.
    * ** Cons:** May not be as comprehensive as commercial APIs, data quality can be inconsistent.

** 2. Focused on Specific Data Points:**

* ** Goodreads API:** Provides access to book data from the popular Goodreads platform, including ratings, reviews, and user lists.Ideal for social aspects of books.
    * ** Pros:** Strong focus on user engagement data, excellent for community - driven insights.
    * ** Cons:** Limited to Goodreads - specific data, may not be suitable for general book information.
* ** ISBNdb API:** Specializes in ISBN data, providing information about books like publication details, editions, and cover images.    
    * ** Pros:** Highly accurate ISBN data, ideal for identifying specific editions.
    * ** Cons:** Primarily focused on ISBNs, may lack other book details.
* ** Amazon Product Advertising API:** Access information about books and other products sold on Amazon, including pricing, availability, and reviews.
    * ** Pros:** Direct access to Amazon's vast product catalog, including pricing and availability.
        * ** Cons:** Requires a paid Amazon account, limited to Amazon - specific data.`
    res.status(201).json({ "promptResponse": respdata })

};

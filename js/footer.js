const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
            <li class="category-title">special thanks</li>
            <li><a href="#" class="footer-link">Amrit</a></li>
            <li><a href="#" class="footer-link">Abhash</a></li>
            <li><a href="#" class="footer-link">Aditya</a></li>
            <li><a href="#" class="footer-link">Ajay</a></li>
            <li><a href="#" class="footer-link">Pooja</a></li>
            <li><a href="#" class="footer-link">Sanha</a></li>
            <li><a href="#" class="footer-link">Akanksha</a></li>
            </ul>
            <ul class="category">
            <li class="category-title">not special thanks</li>
            <li><a href="#" class="footer-link">apne </a></li>
            <li><a href="#" class="footer-link">mnn</a></li>
            <li><a href="#" class="footer-link">se</a></li>
            <li><a href="#" class="footer-link">joh</a></li>
            <li><a href="#" class="footer-link">achaa</a></li>
            <li><a href="#" class="footer-link">lage</a></li>
            <li><a href="#" class="footer-link">daal lo</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">jab aapke pass karne ko koi kaam nahi ho toh aap yeh sab karte ho isse meri zindagi me koi farak nahi aaya.baaki sab toh theek hi hai agar aap yeh abhi tak padh rhe ho toh bohot vele ho aap jvfsbavgfsijvbfsjvbfsabvifsbvfksjabviabvjkfsbavabfjkvsavijkfbasvkfjsbvfsajbvfbislkavsabvisaflbvijvbfdjolvfbviljfavfsvbfssvfbasv vfsaiv ifiv favfv fi vif vi fvfsiv fsi vfi vif viaf vfsai vfsaiv fv fvi sfv si </p>
    <p class="info">support emails - help@poojamer.com, customersupport@andrewtate.com</p>
    <p class="info">telephone - yeh nahi dunga</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">who buys a tote bag these days</p>
    `;
}

createFooter();
const ACRONYMS = [
  {a: 'WWW', meaning: 'World Wide Web', desc: 'The global network of interconnected computers. Note that the world wide web is different from the internet. The WWW is a piece of software that allows users to access and retrieve information from the internet.', tags:['technology', 'web'], example:'Check out the WWW for more information.'},
  {a: 'URL', meaning: 'Uniform Resource Locator', desc: 'A web address that specifies the location of a resource on the internet. You type it into your browser to visit a website.', tags:['technology', 'web'], example:'Visit the URL to access the website.'},
  {a: 'HTML', meaning: 'HyperText Markup Language', desc: 'The standard markup language for documents designed to be displayed in a web browser.', tags:['technology', 'web'], example:'The HTML code defines the structure of the webpage.'},
  {a: 'CSS', meaning: 'Cascading Style Sheets', desc: 'A stylesheet language used to describe the presentation of a document written in HTML.', tags:['technology', 'web'], example:'The CSS code defines the appearance of the webpage.'},
  {a: 'JS', meaning: 'JavaScript', desc: 'A programming language that is commonly used to create interactive effects within web browsers.', tags:['technology', 'web'], example:'The JS code handles the user interactions on the webpage.'},
  {a: 'ARPANET', meaning: 'Advanced Research Projects Agency Network', desc: 'The precursor to the modern internet. This was made by the U.S. Department of Defense and used to transfer data between computers. It had the first implementation of Servers, Clients and packets.', tags:['technology', 'history', 'web'], example:'The ARPANET was the first network to implement the TCP/IP protocol.'},
  {a: 'IP', meaning: 'Internet Protocol', desc: 'The primary protocol for routing packets across the internet. Every device on the internet has an IP address, which is used to identify and locate devices on the network. When you type in a URL this redirects to the IP address of the server.', tags:['technology', 'networking', 'web'], example:'The IP address identifies devices on the internet.'},
  {a: 'TCP', meaning: 'Transmission Control Protocol', desc: 'A fundamental protocol in the internet protocol suite that provides reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network. It chops up data into packets that every computer can understand.', tags:['technology', 'networking'], example:'The TCP protocol ensures that data is delivered correctly and in the right order.'},
  {a: 'E-Mail', meaning: 'Electronic Mail', desc: 'A method of exchanging messages between users over a computer network.', tags:['technology', 'communication'], example:'Send an E-Mail to your colleague with the updated information.'},
  {a: 'HTTP', meaning: 'HyperText Transfer Protocol', desc: 'The protocol used for transmitting web pages and other content over the internet. Secretly used before every URL on the internet.', tags:['technology', 'web'], example:'The HTTP request retrieves the webpage from the server.'},
  {a: 'HTTPS', meaning: 'HyperText Transfer Protocol Secure', desc: 'A secure version of HTTP that uses encryption to protect data transmitted between a web browser and a web server.', tags:['technology', 'web'], example:'Always use HTTPS when accessing sensitive information online.'},
  {a: 'DNS', meaning: 'Domain Name System', desc: 'A hierarchical and distributed naming system for computers, services, or other resources connected to the internet or a private network. It translates domain names into IP addresses.', tags:['technology', 'networking', 'web'], example:'The DNS translates domain names into IP addresses.'},
  {a: 'LAN', meaning: 'Local Area Network', desc: 'A network that connects devices within a limited area, such as a home, office, or building.', tags:['technology', 'networking'], example:'The LAN allows devices in the office to communicate with each other.'},
  {a: 'WAN', meaning: 'Wide Area Network', desc: 'A network that covers a broad area, such as a city, country, or even the entire world. The internet is an example of a WAN.', tags:['technology', 'networking'], example:'The WAN connects multiple LANs across different locations.'},
  {a: 'VPN', meaning: 'Virtual Private Network', desc: 'A technology that creates a secure and encrypted connection over a less secure network, such as the internet. It allows users to send and receive data as if their devices were directly connected to a private network.', tags:['technology', 'networking', 'security'], example:'Use a VPN to securely access your company\'s internal network from home.'},
  {a: 'IoT', meaning: 'Internet of Things', desc: 'A network of physical objects embedded with sensors, software, and other technologies that connect and exchange data with other devices and systems over the internet.', tags:['technology', 'networking'], example:'IoT devices can include smart home appliances, wearable fitness trackers, and connected cars.'},
  {a: 'ISP', meaning: 'Internet Service Provider', desc: 'A company that provides individuals and organizations with access to the internet and other related services.', tags:['technology', 'communication'], example:'Your ISP provides you with internet access.'},
  {a: 'Cookie', meaning: 'Web Cookie', desc: 'A small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Every time the user visits the website, the cookie is sent back to the server.', tags:['technology', 'web'], example:'The Cookie stores your login information for convenience.'},
  {a: '.com', meaning: 'Commercial Domain', desc: 'A top-level domain used for commercial websites.', tags:['technology', 'web'], example:'The .com domain is the most common top-level domain.'},
  {a: '.org', meaning: 'Organization Domain', desc: 'A top-level domain used for non-profit organizations.', tags:['technology', 'web'], example:'The .org domain is often used by non-profit organizations.'},
  {a: '.edu', meaning: 'Educational Domain', desc: 'A top-level domain used for educational institutions.', tags:['technology', 'web'], example:'The .edu domain is used by universities and colleges.'},
  {a: '.gov', meaning: 'Government Domain', desc: 'A top-level domain used for U.S. entities.', tags:['technology', 'web'], example:'The .gov domain is used by government agencies.'},
  {a: '.govt', meaning: 'Government Domain', desc: 'A top-level domain used for government entities.', tags:['technology', 'web'], example:'The .govt domain is used by government agencies.'},
  {a: '.mil', meaning: 'Military Domain', desc: 'A top-level domain used for the U.S. military and its affiliates.', tags:['technology', 'web'], example:'The .mil domain is used by the U.S. military.'},
  {a: 'Cache', meaning: 'Web Cache', desc: 'A temporary storage area where frequently accessed data is kept to reduce the time needed to access it again.', tags:['technology', 'web'], example:'The Cache stores recently visited web pages for faster loading.'},
  {a: 'Firewall', meaning: 'Network Firewall', desc: 'A security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.', tags:['technology', 'security'], example:'The Firewall protects the network from unauthorized access.'},
  {a: 'IPv6', meaning: 'Internet Protocol version 6', desc: 'The latest version of the Internet Protocol, designed to replace IPv4 (Your regular 192.168.1.1) and provide a larger address space.', tags:['technology', 'networking'], example:'The IPv6 protocol provides more IP addresses than its predecessor.'},
  {a: 'FTP', meaning: 'File Transfer Protocol', desc: 'A standard network protocol used for the transfer of computer files between a client and server on a computer network.', tags:['technology', 'networking'], example:'The FTP protocol allows you to upload and download files from a remote server.'},
  {a: 'Bandwidth', meaning: 'Network Bandwidth', desc: 'The maximum amount of data that can be transmitted over a network connection in a given time period.', tags:['technology', 'networking'], example:'The Bandwidth of your internet connection determines how fast you can download and upload files.'},
  {a: 'API', meaning: 'Application Programming Interface', desc: 'A set of rules and protocols for building and integrating application software.', tags:['technology', 'software'], example:'The API allows different software applications to communicate with each other.'},
  {a: 'JSON', meaning: 'JavaScript Object Notation', desc: 'A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.', tags:['technology', 'programming'], example:'The JSON format is commonly used for transmitting data between a server and a web application.'},
  {a: 'SaaS', meaning: 'Software as a Service', desc: 'A software distribution model in which applications are hosted by a third-party provider and made available to customers over the internet through a subscription-based approach. Instead of buying and owning the software, users rent to it. Popularised by Salesforce, examples include Netflix, Google Workspace, and Microsoft 365', tags:['technology', 'software'], example:'The SaaS model allows users to access software without installing it on their own devices.'},
  {a: 'OSS', meaning: 'Open Source Software', desc: 'Software with source code that is publicly available and can be modified and distributed by anyone.', tags:['technology', 'software'], example:'The OSS model promotes collaboration and innovation in software development.'},
  {a: 'CPU', meaning: 'Central Processing Unit', desc: 'The primary component of a computer that executes instructions and performs calculations.', tags:['technology', 'hardware'], example:'The CPU is often referred to as the "brain" of the computer.'},
  {a: 'GPU', meaning: 'Graphics Processing Unit', desc: 'A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device.', tags:['technology', 'hardware'], example:'The GPU is responsible for rendering graphics in video games and other visual applications.'},
  {a: 'PCIE', meaning: 'Peripheral Component Interconnect Express', desc: 'A high-speed serial computer expansion bus standard for connecting hardware devices to a computer motherboard.', tags:['technology', 'hardware'], example:'The PCIE slot allows you to install high-performance graphics cards and other expansion cards.'},
  {a: 'NVME', meaning: 'Non-Volatile Memory Express', desc: 'A host controller interface and protocol for connecting solid-state drives to a computer motherboard.', tags:['technology', 'hardware'], example:'The NVME protocol provides faster data transfer speeds than traditional SATA interfaces.'},
  {a: 'SATA', meaning: 'Serial Advanced Technology Attachment', desc: 'A hard disk drive interface standard for connecting storage devices to a computer motherboard.', tags:['technology', 'hardware'], example:'The SATA interface is commonly used for connecting hard drives and optical drives to a computer.'},
  {a: 'HDD', meaning: 'Hard Disk Drive', desc: 'A traditional storage device that uses spinning disks to store and retrieve data.', tags:['technology', 'hardware'], example:'The HDD is a common type of storage device used in computers.'},
  {a: 'SSD', meaning: 'Solid State Drive', desc: 'A storage device that uses flash memory to store data, providing faster access times and improved durability compared to traditional hard disk drives.', tags:['technology', 'hardware'], example:'The SSD provides faster boot times and application loading compared to an HDD.'},
  {a: 'RAM', meaning: 'Random Access Memory', desc: 'A type of computer memory that can be accessed randomly, allowing data to be read and written quickly.', tags:['technology', 'hardware'], example:'The RAM allows your computer to run multiple applications simultaneously.'},
  {a: 'ROM', meaning: 'Read-Only Memory', desc: 'A type of non-volatile memory that is used to store firmware or software that is not intended to be modified frequently.', tags:['technology', 'hardware'], example:'The ROM contains the computer\'s BIOS or firmware.'},
  {a: 'BIOS', meaning: 'Basic Input/Output System', desc: 'Firmware that initializes and tests hardware components during the booting process of a computer.', tags:['technology', 'hardware'], example:'The BIOS provides the necessary instructions for the computer to start up.'},
  {a: 'ACD', meaning: 'Automated Call Distribution', desc: 'A system that automatically routes incoming calls to the most appropriate agent or department based on predefined criteria.', tags:['technology', 'telecommunications'], example:'The ACD system ensures that customer calls are directed to the right representative.'},
  {a: 'UEFI', meaning: 'Unified Extensible Firmware Interface', desc: 'A modern firmware interface that provides a more flexible and secure way to initialize hardware and load the operating system.', tags:['technology', 'hardware'], example:'The UEFI firmware replaces the traditional BIOS and offers improved performance and security.'},
  {a: 'DDoS', meaning: 'Distributed Denial of Service', desc: 'A cyberattack where multiple compromised computer systems attack a target, such as a server, website, or other network resource, to overwhelm it with traffic and make it unavailable to users.', tags:['technology', 'cybersecurity', 'networking'], example:'The DDoS attack caused the website to go offline for several hours.'},
  {a: 'AI', meaning: 'Artificial Intelligence', desc: 'The simulation of human intelligence in machines that are programmed to think and learn like humans.', tags:['technology', 'software'], example:'AI is being used to develop autonomous vehicles and smart assistants.'},
  {a: 'ML', meaning: 'Machine Learning', desc: 'A subset of computer programming. Machine learning is different from traditional prgramming in that instead of a prgrammers typing in rules, the machine is instead tested and trained to learn from data.', tags:['technology', 'software'], example:'ML is used in recommendation systems and image recognition applications.'},
  {a: 'CRUD', meaning: 'Create, Read, Update, Delete', desc: 'The four basic functions of persistent storage in computer science.', tags:['technology', 'software'], example:'CRUD operations are fundamental to database management.'},
  {a: 'SQL', meaning: 'Structured Query Language', desc: 'A domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS).', tags:['technology', 'software'], example:'SQL is used to query and manipulate data in databases.'},
  {a: 'NFT', meaning: 'Non-Fungible Token', desc: 'A unique digital asset that represents ownership of a specific item or piece of content.', tags:['technology', 'blockchain'], example:'NFTs are used to prove ownership of digital art and collectibles.'},
  {a: 'Web3', meaning: 'Web3', desc: 'The next generation of the web, characterized by decentralized applications and cryptocurrency.', tags:['technology', 'blockchain'], example:'Web3 aims to create a more open and user-controlled internet.'},
  {a: 'ASCII', meaning: 'American Standard Code for Information Interchange', desc: 'A character encoding standard for electronic communication, widely used to represent text in computer-readable binary.', tags:['technology', 'programming'], example:'The ASCII code assigns unique numbers to each character, allowing computers to store and transmit text data.'},
  {a: 'CLI', meaning: 'Command-Line Interface', desc: 'A text-based interface for interacting with a computer system or software application.', tags:['technology', 'programming'], example:'The CLI allows users to execute commands and scripts directly from the terminal.'},
  {a: 'DOM', meaning: 'Document Object Model', desc: 'A programming interface for HTML and XML documents, representing the structure of a webpage as a tree of objects.', tags:['technology', 'web development'], example:'The DOM allows JavaScript to access and modify the content and structure of a webpage.'},
  
];

const resultsEl = document.getElementById('results');
const searchEl = document.getElementById('search');
const filterEl = document.getElementById('filter');
const randomBtn = document.getElementById('random');
const sentinelEl = document.getElementById('sentinel');

// Infinite scroll state variables
let filteredList = [];
let currentIndex = 0;
const ITEMS_PER_PAGE = 12; // Small chunks so ancient RAM doesn't choke
let observer = null;

function init(){
  populateFilter();
  onSearch(); // Initializes filteredList and triggers initial batch render
  
  searchEl.addEventListener('input', onSearch);
  filterEl.addEventListener('change', onSearch);
  randomBtn.addEventListener('click', pickRandom);
  
  setupInfiniteScroll();
}

function populateFilter(){
  const tags = new Set();
  ACRONYMS.forEach(x => x.tags.forEach(t => tags.add(t)));
  Array.from(tags).sort().forEach(t => {
    const opt = document.createElement('option'); 
    opt.value = t; 
    opt.textContent = t; 
    filterEl.appendChild(opt);
  });
}

function onSearch(){
  const q = searchEl.value.trim().toLowerCase();
  const f = filterEl.value;
  
  // Filter master list down first
  filteredList = ACRONYMS.filter(item => {
    if(f && !item.tags.includes(f)) return false;
    if(!q) return true;
    return item.a.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
  });
  
  // Reset pagination state
  resultsEl.innerHTML = '';
  currentIndex = 0;
  
  if(filteredList.length === 0){ 
    resultsEl.innerHTML = '<div class="empty">No results found.</div>'; 
    sentinelEl.style.display = 'none';
    return; 
  }
  
  sentinelEl.style.display = 'block';
  loadNextBatch();
}

function loadNextBatch() {
  if (currentIndex >= filteredList.length) {
    sentinelEl.style.display = 'none'; // Everything loaded
    return;
  }
  
  const nextBatch = filteredList.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
  nextBatch.forEach(item => resultsEl.appendChild(cardFor(item)));
  currentIndex += ITEMS_PER_PAGE;
}

function cardFor(item){
  const el = document.createElement('article'); el.className='card';
  const h = document.createElement('h3'); h.textContent = item.a; el.appendChild(h);
  const meta = document.createElement('div'); meta.className='meta'; meta.textContent = item.meaning; el.appendChild(meta);
  const desc = document.createElement('div'); desc.className='desc'; desc.textContent = item.desc; el.appendChild(desc);
  if(item.example){ const ex = document.createElement('div'); ex.className='meta'; ex.textContent = 'Example: '+item.example; el.appendChild(ex); }
  if(item.tags && item.tags.length){
    const tags = document.createElement('div'); tags.className='tags';
    item.tags.forEach(t=>{ const span=document.createElement('span'); span.className='tag'; span.textContent=t; tags.appendChild(span); });
    el.appendChild(tags);
  }
  el.addEventListener('click', ()=>{ el.classList.toggle('expanded'); });
  return el;
}

function setupInfiniteScroll() {
  // Use modern IntersectionObserver if available
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadNextBatch();
      }
    }, { rootMargin: '200px' });
    
    observer.observe(sentinelEl);
  } else {
    // Legacy fallback for older 2000s browsers (Windows XP/Pentium III)
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 300) {
        loadNextBatch();
      }
    });
  }
}

function pickRandom(){
  const idx = Math.floor(Math.random() * ACRONYMS.length);
  const chosen = ACRONYMS[idx];
  searchEl.value = chosen.a; 
  onSearch();
  
  const node = Array.from(resultsEl.children).find(n => n.querySelector('h3')?.textContent === chosen.a);
  if(node){ 
    node.scrollIntoView({behavior:'smooth', block:'center'}); 
    node.style.transition='box-shadow .35s'; 
    node.style.boxShadow='0 0 0 3px rgba(6,182,212,0.15)'; 
    setTimeout(()=>node.style.boxShadow='', 800); 
  }
}

document.addEventListener('DOMContentLoaded', init);
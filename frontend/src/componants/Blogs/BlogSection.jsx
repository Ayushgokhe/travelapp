import React from 'react';
import './BlogSection.css';
import Japan from '../../../public/blogimg/Japan.jpg';
import France from '../../../public/blogimg/French.jpeg';
import UnitedKingdom from '../../../public/blogimg/uk.jpg';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-item">
        <div className="text-content">
          <h2>Japan</h2>
          <p>Japan is a country that has no mandatory requirement for having a travel insurance plan while entering the nation. However, the travelling insurance plan serves as a blanket of safety during international trips. With so much going around, there is always a fear of the worst happening in the back of our heads. The travel insurance plan offers peace of mind with its coverage for medical emergencies, personal liability, loss of luggage and more in foreign nations. With offering like flight cancellation insurance, policyholders can incur loss due to delay or cancellation of a flight. While choosing travelling insurance, always check your requirements and budget. Tata AIG is a well-known insurance provider which has an international travel insurance plan that starts at ₹40.84 per day.</p>
        </div>
        <img src={Japan} alt="Virtual travel" className="blog-image" />
      </div>
      <div className="blog-item">
        <img src={France} alt="Game nights" className="blog-image" />
        <div className="text-content">
          <h2>France</h2>
          <p>France, officially the French Republic, is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian Oceans, giving it one of the largest discontiguous exclusive economic zones in the world.</p>
        </div>
      </div>
      <div className="blog-item">
        <div className="text-content">
          <h2>United Kingdom</h2>
          <p>The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a country in Northwestern Europe, off the coast of the continental mainland. It comprises England, Scotland, Wales, and Northern Ireland. The UK includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea, and the Irish Sea. The total area of the United Kingdom is 94,354 square miles (244,376 km2), with an estimated population of nearly 67.6 million people in 2022.</p>
        </div>
        <img src={UnitedKingdom} alt="Virtual travel" className="blog-image" />
      </div>
    </div>
  );
};

export default BlogSection;

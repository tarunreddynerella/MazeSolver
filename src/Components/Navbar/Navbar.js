// Navbar.js
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import M from "materialize-css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let sidenav = document.querySelector("#mobile-nav");
    let instance = M.Sidenav.init(sidenav, {
      onOpenStart: () => setIsMenuOpen(true),
      onCloseStart: () => setIsMenuOpen(false),
    });

    const handleClose = () => {
      if (instance) instance.close();
    };

    // Close sidenav on link click
    let links = document.querySelectorAll(".sidenav a");
    links.forEach((link) => {
      link.addEventListener("click", handleClose);
    });

    // Cleanup function to remove event listeners and destroy sidenav instance
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClose);
      });
      if (instance) instance.destroy(); // Ensure instance is not null before calling destroy
    };
  }, []);

  return (
    <div className="navbar">
      {!isMenuOpen && (
        <a href="#" data-target="mobile-nav" className="menu-btn sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      )}
      <div className="right">
        <a
          href="/Files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Resume
        </a>
        <a href="#Contact" rel="noopener noreferrer" className="btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;






















// Navbar.js
// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import M from "materialize-css";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     let sidenav = document.querySelector("#mobile-nav");
//     let instance = M.Sidenav.init(sidenav, {
//       onOpenStart: () => setIsMenuOpen(true),
//       onCloseStart: () => setIsMenuOpen(false),
//     });

//     // Close sidenav on link click
//     let links = document.querySelectorAll(".sidenav a");
//     links.forEach((link) => {
//       link.addEventListener("click", () => {
//         instance.close();
//       });
//     });

//     // Cleanup function to remove event listeners and destroy sidenav instance
//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("click", () => {
//           instance.close();
//         });
//       });
//       instance.destroy();
//     };
//   }, []);

//   return (
//     <div className="navbar">
//       {!isMenuOpen && (
//         <a href="#" data-target="mobile-nav" className="menu-btn sidenav-trigger">
//           <i className="material-icons">menu</i>
//         </a>
//       )}
//       <div className="right">
//         <a
//           href="/Files/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn"
//         >
//           Resume
//         </a>
//         <a href="#Contact" rel="noopener noreferrer" className="btn">
//           Contact Me
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

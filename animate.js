document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text");
  const imageComponents = document.querySelectorAll(".image-component");
  const textContainer = document.querySelector(".text-container");
  const circularLayout = document.querySelector(".circular-layout");

  const handleTextEffects = () => {
    if (window.innerWidth <= 999) {
      texts.forEach((text) => text.classList.remove("text-emerged"));
      return;
    }

    setTimeout(() => {
      texts.forEach((text) => text.classList.add("text-emerged"));
    }, 24);
  };

  const toggleHoverEffects = () => {
    imageComponents.forEach((component, index) => {
      component.addEventListener(
        "mouseenter",
        handleMouseEnter.bind(null, index)
      );
      component.addEventListener("mouseleave", handleMouseLeave);
    });
  };

  const handleMouseEnter = (index) => {
    texts.forEach((text) => {
      text.style.color = " #FFFFFF";
      text.style.textShadow =
        "-1px -1px 0  #FFFFFF, 1px -1px 0  #FFFFFF, -1px 1px 0  #FFFFFF, 1px 1px 0  #FFFFFF";
    });

    circularLayout.style.zIndex = "30";
    imageComponents[index].style.zIndex = "31";
    textContainer.style.zIndex = "20";

    imageComponents.forEach((otherComponent, otherIndex) => {
      if (otherIndex !== index) {
        otherComponent.style.zIndex = "29";
        otherComponent.querySelector(".custom-component").style.display =
          "none";
        otherComponent.querySelector(".transparent-content").style.display =
          "block";
      }
    });
  };

  const handleMouseLeave = () => {
    texts.forEach((text) => {
      text.style.color = " #FFFFFF";
      text.style.textShadow = "none";
    });

    circularLayout.style.zIndex = "10";
    imageComponents.forEach((otherComponent) => {
      otherComponent.style.zIndex = "10";
      otherComponent.querySelector(".custom-component").style.display = "flex";
      otherComponent.querySelector(".transparent-content").style.display =
        "none"; // Hide transparent content
    });
    textContainer.style.zIndex = "20";
  };

  handleTextEffects();
  toggleHoverEffects();

  window.addEventListener("resize", () => {
    handleTextEffects();
    toggleHoverEffects();
  });
});

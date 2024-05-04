"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Sidebar = ({ title, menu }) => {
  const pathName = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll(".menu > li");
    items.forEach((item) => {
      let link = item.querySelector("a");
      let submenu = item.querySelector(".submenu");
      if (!!link && !!submenu) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          link.classList.toggle("active");
          submenu.classList.toggle("active");
          submenu.style.maxHeight = submenu.classList.contains("active")
            ? submenu.scrollHeight + "px"
            : 0;
        });
      }
    });
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".menu a");
    let activeItem;
    items.forEach((item) => {
      item.classList.remove("active");
      let itemParent = item.parentElement.parentElement;
      if (itemParent.classList.contains("submenu")) {
        itemParent.classList.remove("active");
        itemParent.style.maxHeight = 0;
        itemParent.parentElement.firstChild?.classList?.remove("active");
      }
      if (item.href === window.location.href) {
        activeItem = item;
      }
    });
    if (activeItem) {
      activeItem.classList.add("active");
      let itemParent = activeItem.parentElement.parentElement;
      if (itemParent.classList.contains("submenu")) {
        itemParent.classList.add("active");
        itemParent.style.maxHeight = itemParent.scrollHeight + "px";
        itemParent.parentElement.firstChild?.classList?.add("active");
      }
    }
  }, [pathName]);

  return (
    <>
      <div
        onClick={() => {
          window.document.querySelector(".sidebar").classList.toggle("open");
          window.document
            .querySelector(".sidebar-overlay")
            .classList.toggle("open");
        }}
        className="sidebar-overlay"
      />
      <aside className="sidebar !z-20 ">
        <div className="title">{title}</div>
        <ul className="menu min-h-screen">
          {menu?.map((item, index) => (
            <li key={index}>
              {item.menu && <div className="nav-menu">{item.menu}</div>}
              {item.label && !item.child && (
                <Link
                  href={item.href || "#!"}
                  className="nav-link"
                  onClick={() => {
                    window.document
                      .querySelector(".sidebar")
                      .classList.toggle("open");
                    window.document
                      .querySelector(".sidebar-overlay")
                      .classList.toggle("open");
                  }}
                >
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="label">{item.label}</span>
                </Link>
              )}
              {item.child && (
                <>
                  <a role="button" className="nav-link-sub has-arrow">
                    {item.icon && <span className="icon">{item.icon}</span>}
                    <span className="label">{item.label}</span>
                  </a>
                  <ul className="submenu">
                    {item.child.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href || "#!"}
                          className="nav-link"
                          onClick={() => {
                            window.document
                              .querySelector(".sidebar")
                              .classList.toggle("open");
                            window.document
                              .querySelector(".sidebar-overlay")
                              .classList.toggle("open");
                          }}
                        >
                          {item.icon && (
                            <span className="icon">{item.icon}</span>
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

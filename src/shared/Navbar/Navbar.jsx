import { Footprints, Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4 px-4 md:px-3 lg:px-3 border-gray-300">
      <div>
        <h1 className="font-bold text-3xl flex items-center gap-2">
          <Footprints size={35} color="#297bff" /> Shoezzy
        </h1>
      </div>
      <div className="flex items-center gap-8">
        <div className=" items-center gap-10 hidden md:hidden lg:flex">
          <NavLink
            className={({ isPending, isActive }) =>
              isPending
                ? "pending.."
                : isActive
                ? "border-b-2 font-bold border-[#297bff]"
                : "hover:border-b-2 hover:border-[#297bff] hover:transition hover:delay-75"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isPending, isActive }) =>
              isPending
                ? "pending.."
                : isActive
                ? "border-b-2 font-bold border-[#297bff]"
                : "hover:border-b-2 hover:border-[#297bff] hover:transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/shop"}
            className={({ isPending, isActive }) =>
              isPending
                ? "pending.."
                : isActive
                ? "border-b-2 font-bold border-[#297bff]"
                : "hover:border-b-2 hover:border-[#297bff] hover:transition hover:delay-75"
            }
          >
            Shop
          </NavLink>
        </div>
        <div className="relative">
          <Heart size={30} />
          <span className=" bg-gray-200 text-[#297bff] rounded-full absolute -top-1 left-6 w-6 flex items-center justify-center h-6">
            10
          </span>
        </div>
        <div className="relative">
          <ShoppingCart size={30} />
          <span className=" bg-gray-200 text-[#297bff] rounded-full absolute -top-1 left-6 w-6 flex items-center justify-center h-6">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

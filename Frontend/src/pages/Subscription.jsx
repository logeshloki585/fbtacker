import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import  axios from 'axios';
import './sub.css';
import { Navigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {loadStripe} from '@stripe/stripe-js';
import Stripe from "./Stripe";

const Subscription = () => {
    
    const [userData, setUserData] = useState(null);
    const [addOnPrice,setAddOnPrice] = useState(0);

    const [proPrice,setProPrice] = useState(100);
    const [elitePrice,setElitePrice] = useState(500);

    const { user } = useSelector((state) => state.user);


  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

 

async function handleCheckout(type,count = 1) {
    const stripe = await Stripe();
    console.log(type)
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: type,
          quantity: count,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:5173/profile`,
      cancelUrl: `http://localhost:3000/profile`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }


    const handleAddons = (e) => {
            const selectedCount = parseInt(e.target.value);
            setAddOnPrice(selectedCount);
            console.log(addOnPrice);
    };

  const Subscribe = async (plan) => {
    try {
        const response = await axios.post("http://localhost:3000/api/upgradePlan", {
          currentPlan: plan,
          addons: addOnPrice,
        },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          if(plan === 'Elite'&& addOnPrice == 0){
            const Elite = 'price_1OiVwVSCCWTqFklHamJTlQT4';
            handleCheckout(Elite);
          }else if(plan === 'Pro' && addOnPrice == 0){
            const Pro = 'price_1OiKR7SCCWTqFklH3Mt65V3b';
            console.log(Pro)
            handleCheckout(Pro);
          }else if(addOnPrice > 0){
            const AddonType = 'price_1OiKCxSCCWTqFklHJCDvjkW0';
            handleCheckout(AddonType,addOnPrice);
          }
          return <Navigate to="/profile" />;
      } catch (error) {
        console.error("Error upgrading plan:", error);
      }
  };
  

  return (
    <div>
        <section className="relative ">
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                       
                        <div class="flex flex-col p-4 w-[350px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Free</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">0 Rs.</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Limited access</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>One location</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Number of admin: <span class="font-semibold">1 Admin</span></span>
                                </li>
                                <li class="flex line-through items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support </span>
                                </li>
                                <li class="flex line-through items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Additional admin and location support</span>
                                </li>
                            </ul>
                            {(userData && userData.currentPlan=='Free')?
                            <button  disabled  onClick={()=>Subscribe('Free')} class=" text-white cursor-not-allowed bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={()=>Subscribe('Free')} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }

                        </div>

                        <div class="flex flex-col p-4 w-[350px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Pro</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"> {proPrice} Rs.</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Pro version access</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Three location</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Number of admin: <span class="font-semibold">1 Admin</span></span>
                                </li>
                                <li class="flex  items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support </span>
                                </li>
                                
                                <div className="border border-gray-100"></div>
                            </ul>
                            
                            {(userData && userData.currentPlan=='Pro')?
                            <button  disabled  onClick={()=>Subscribe('Pro')} class=" text-white cursor-not-allowed bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={()=>Subscribe('Pro')} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }

                            {(userData && userData.currentPlan=='Pro')?
                            <div className="mt-6 flex flex-col items-center">
                            <h3 class="mb-4 text-2xl font-semibold">Pro AddOns</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-2">10rs per location</p>
                                <div>
                                <label htmlFor="location">No. location :</label>
                                <select className="bg-gray text-black w-16 pl-5  mb-4 ml-2 rounded" onChange={handleAddons} name="location" id="location">
                                    <option value='0' onChange={handleAddons}>0</option>
                                    <option value='1' onChange={handleAddons}>1</option>
                                    <option value='2' onChange={handleAddons}>2</option>
                                    <option value='3' onChange={handleAddons}>3</option>
                                </select>
                                </div>
                                <button    onClick={()=>Subscribe('Pro')} class="w-64 text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    Upgrade
                                </button>
                            </div>
                            :
                            <></>
                            }
                        </div>

                        <div class="flex flex-col p-4 w-[350px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Elite</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">{elitePrice} Rs.</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Pro version access</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Three location</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Number of admin: <span class="font-semibold">1 Admin</span></span>
                                </li>
                                <li class="flex  items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support </span>
                                </li>
                                
                                <div className="border border-gray-100"></div>

                            </ul>
                            
                            {(userData && userData.currentPlan=='Elite')?
                            <button  disabled  onClick={()=>Subscribe('Elite')} class=" text-white cursor-not-allowed bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={()=>Subscribe('Elite')} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }

                            {(userData && userData.currentPlan=='Elite')?
                            <div className="mt-6 flex flex-col items-center">
                            <h3 class="mb-4 text-2xl font-semibold">Elite AddOns</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-2">10rs per location</p>
                                <div>
                                <label htmlFor="location">No. location :</label>
                                <select className="bg-gray text-black w-16 pl-5  mb-4 ml-2 rounded" onChange={handleAddons} name="location" id="location">
                                    <option value='0' onChange={handleAddons}>0</option>
                                    <option value='1' onChange={handleAddons}>1</option>
                                    <option value='2' onChange={handleAddons}>2</option>
                                    <option value='3' onChange={handleAddons}>3</option>
                                </select>
                                </div>
                                <button    onClick={()=>Subscribe('Elite')} class="w-64 text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    Upgrade
                                </button>
                            </div>
                            :
                            <></>
                            }
                        </div>
                    </div>
                </div>
                
            </section>
            
        </section>
    </div>
  );
};

export default Subscription;

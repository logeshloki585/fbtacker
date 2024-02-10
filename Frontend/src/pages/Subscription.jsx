import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import  axios from 'axios';
import './sub.css';
import { Navigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Subscription = () => {
    
    const [userData, setUserData] = useState(null);
    const [proPrice,setProPrice] = useState(50);
    const [elitePrice,setElitePrice] = useState(100);

    const [showCanceledText, setShowCanceledText] = useState(false);
    const [showCanceledText2, setShowCanceledText2] = useState(false);

    const [eliteCheck, setEliteCheck] = useState(false);
    const [eliteCheck2, setEliteCheck2] = useState(false);
    const [eliteCheck3, setEliteCheck3] = useState(false);

    const [showFreePopup, setShowFreePopup] = useState(false);
    const [showElitePopup, setShowElitePopup] = useState(false);
    const [showProPopup, setShowProPopup] = useState(false);

    const { user } = useSelector((state) => state.user);


  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);


  const handleCheckboxChange = (e) => {
    setShowCanceledText(e.target.checked);
    if (e.target.checked) {
        setProPrice(prevPrice => prevPrice + 10);
    } else {
        setProPrice(prevPrice => prevPrice - 10);
    }
};

const handleCheckboxChange2 = (e) => {
    setShowCanceledText2(e.target.checked);
    if (e.target.checked) {
        setProPrice(prevPrice => prevPrice + 10);
    } else {
        setProPrice(prevPrice => prevPrice - 10);
    }
};


const handleEliteCheck= (e) => {
    setEliteCheck(e.target.checked);
    if (e.target.checked) {
        setElitePrice(prevPrice => prevPrice + 10);
    } else {
        setElitePrice(prevPrice => prevPrice - 10);
    }
};

const handleEliteCheck2 = (e) => {
    setEliteCheck2(e.target.checked);
    if (e.target.checked) {
        setElitePrice(prevPrice => prevPrice + 10);
    } else {
        setElitePrice(prevPrice => prevPrice - 10);
    }
};

const handleEliteCheck3 = (e) => {
    setEliteCheck3(e.target.checked);
    if (e.target.checked) {
        setElitePrice(prevPrice => prevPrice + 10);
    } else {
        setElitePrice(prevPrice => prevPrice - 10);
    }
};

const ToggleElite = () => {
    setShowElitePopup(!showElitePopup);
  };

  const SubscribeElite = async () => {
    setShowElitePopup(!showElitePopup);
    try {
        const newElitePrice = elitePrice - 100;
        const newAddons = Math.floor(newElitePrice / 10);
        console.log(newElitePrice,newAddons)
        const response = await axios.post("http://localhost:3000/api/upgradePlan", {
          currentPlan: "Elite",
          addons: newAddons,
        },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
    
        return <Navigate to="/profile" />;
      } catch (error) {
        console.error("Error upgrading plan:", error);
      }
  };


  const TogglePro = () => {
    setShowProPopup(!showProPopup);
  };

  const SubscribePro = async () => {
    setShowProPopup(!showProPopup);
    try {
        const newProPrice = proPrice - 50;
        const newAddons = Math.floor(newProPrice / 10);
        const response = await axios.post("http://localhost:3000/api/upgradePlan", {
          currentPlan: "Pro",
          addons: newAddons,
        },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
    
          return <Navigate to="/profile" />;
      } catch (error) {
        console.error("Error upgrading plan:", error);
      }
  };

  const ToggleFree = () => {
    setShowFreePopup(!showFreePopup);
  };

  const SubscribeFree = async () => {
    setShowFreePopup(!showFreePopup);
    try {
        const response = await axios.post("http://localhost:3000/api/upgradePlan", {
          currentPlan: "Free",
          addons: 0,
        },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        
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
                            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$0</span>
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
                            <button  disabled  onClick={ToggleFree} class=" text-white cursor-not-allowed bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={ToggleFree} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }
                        </div>

                        <div class="flex flex-col p-4 w-[350px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$ {proPrice}</span>
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

                                <li className={"flex" + (!showCanceledText ? " line-through" : "") + " items-center space-x-3"}>
                                    <input type="checkbox" value={showCanceledText} onChange={handleCheckboxChange} />
                                    <span>Additional admin and location support</span>
                                </li>
                                <li className={"flex" + (!showCanceledText2 ? " line-through" : "") + " items-center space-x-3"}>
                                    <input type="checkbox" value={showCanceledText2} onChange={handleCheckboxChange2} />
                                    <span>Additional admin and location support</span>
                                </li>
                            </ul>
                            
                            {(userData && userData.currentPlan=='Pro')?
                            <button  disabled  onClick={TogglePro} class=" text-white cursor-not-allowed  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={TogglePro} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }
                        </div>

                        <div class="flex flex-col p-4 w-[350px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use </p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$ {elitePrice}</span>
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

                                <li className={"flex" + (!eliteCheck ? " line-through" : "") + " items-center space-x-3"}>
                                    <input type="checkbox" value={eliteCheck} onChange={handleEliteCheck} />
                                    <span>Additional admin and location support</span>
                                </li>
                                <li className={"flex" + (!eliteCheck2 ? " line-through" : "") + " items-center space-x-3"}>
                                    <input type="checkbox" value={eliteCheck2} onChange={handleEliteCheck2} />
                                    <span>Additional admin and location support</span>
                                </li>
                                <li className={"flex" + (!eliteCheck3 ? " line-through" : "") + " items-center space-x-3"}>
                                    <input type="checkbox" value={eliteCheck3} onChange={handleEliteCheck3} />
                                    <span>Additional admin and location support</span>
                                </li>
                            </ul>
                            
                            {(userData && userData.currentPlan=='Elite')?
                            <button  disabled  onClick={ToggleElite} class=" text-white cursor-not-allowed  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribed
                            </button>:
                            <button    onClick={ToggleElite} class=" text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                            Subscribe
                            </button>
                            }
                        </div>
                    </div>
                </div>
                {showElitePopup && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-lg rounded-lg">
                    <div className="flex justify-between">
                     <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                     <button onClick={()=>setShowElitePopup(!showElitePopup)}><CloseIcon/></button>
                    </div>
                    <p className="mb-4">Enter your payment information here.</p>
                    <div className="text-[24px] font-bold">{elitePrice} $</div>
                    <hr/>
                    <div className="flex gap-3 mt-8">
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="Full Name"/>
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="Account Number"/>
                    </div>
                    <div className="flex gap-3 mt-5">
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="EXP. Date"/>
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="CVV"/>
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-8"
                        onClick={SubscribeElite}
                    >
                        Close
                    </button>
                    </div>
                )}
                {showProPopup && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-lg rounded-lg ">
                    <div className="flex justify-between">
                     <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                     <button onClick={()=>setShowProPopup(!showProPopup)}><CloseIcon/></button>
                    </div>
                    <p className="mb-4">Enter your payment information here.</p>
                    <div className="text-[24px] font-bold">{proPrice} $</div>
                    <hr/>
                    <div className="flex gap-3 mt-8">
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="Full Name"/>
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="Account Number"/>
                    </div>
                    <div className="flex gap-3 mt-5">
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="EXP. Date"/>
                        <input type="text" className="bg-gray-300 border-b-500 border-black p-2" placeholder="CVV"/>
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-8"
                        onClick={SubscribePro}
                    >
                        Close
                    </button>
                    </div>
                )}
                {showFreePopup && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-lg rounded-lg min-w-[400px]">
                    <div className="flex justify-between">
                     <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                     <button onClick={()=>setShowFreePopup(!showFreePopup)}><CloseIcon/></button>
                    </div>
                    <p className="mb-4">Click Subscribe to avail.</p>
                    
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-8"
                        onClick={SubscribeFree}
                    >
                        Subscribe
                    </button>
                    </div>
                )}
            </section>
            
        </section>
    </div>
  );
};

export default Subscription;

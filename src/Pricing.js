import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import buyWidget from "./buyWidget";

const Pricing = () => {
  return (
    <div>
      <Nav />

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              class="rounded-xl"
              src="https://storage.googleapis.com/msgsndr/M4LpH9VZkgr3fIOnQTtk/media/65ce792a52ffe92f7f346ca2.png"
              alt="Image Description"
            />
          </div>

          <div class="mt-5 sm:mt-10 lg:mt-0">
            <div class="space-y-6 sm:space-y-8">
              <div class="space-y-2 md:space-y-4">
                <h3 class="font-bold text-3xl lg:text-4xl text-white dark:text-gray-200">
                  Get your two-week trial.
                </h3>
                <p class="text-gray-100">
                  Grab your two-week trial and start elevating your workout
                  game!
                </p>
              </div>

              <ul role="list" class="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-100">
                    <span class="font-bold">Unlimited</span> Workouts
                  </span>
                </li>

                <li class="flex space-x-3">
                  <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-100">
                    Engaging Music <span class="font-bold">features</span>
                  </span>
                </li>

                <li class="flex space-x-3">
                  <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-100">
                    Motivating Instructors
                  </span>
                </li>
              </ul>
            </div>
            <div className="py-8">
              <div>
                <script
                  src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
                  type="text/javascript"
                ></script>
                <healcode-widget
                  style={{
                    backgroundColor: "#deff00",
                    justifyContent: "center",
                    padding: "15px 80px",
                    borderRadius: "5px",
                    color: "#333 !important",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textDecoration: "none",
                    border: "none",
                    width: "100%",
                    maxWidth: "300px",
                    margin: "0 auto",
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                  data-version="0.2"
                  data-link-class="healcode-pricing-option-text-link"
                  data-site-id="30089"
                  data-mb-site-id="686934"
                  data-bw-identity-site="false"
                  data-type="pricing-link"
                  data-inner-html="Buy Now"
                  data-service-id="101200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;

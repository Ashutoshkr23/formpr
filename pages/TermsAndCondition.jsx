import React from 'react'

const TermsAndCondition = () => {
    return (
        <>
            <header class="bg-blue-500 py-4">
                <div class="container mx-auto px-4">
                    <h1 class="text-white text-2xl font-bold">Shipping and Delivery Policy</h1>
                </div>
            </header>

            <main class="container mx-auto px-4 py-8">
                <section>
                    <h2 class="text-2xl font-bold mb-4">Processing Time</h2>
                    <p class="mb-4">Once your order is received, our team will process it within 7 to 10 business days. During high-demand periods, processing times may vary slightly.</p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Shipping Methods and Timeframes</h2>
                    <p class="mb-4">We offer various shipping methods to accommodate your needs. The estimated delivery timeframes are as follows:</p>
                    <ul class="list-disc list-inside">
                        <li><strong>Standard Shipping:</strong> 7 to 10 business days</li>
                        <li><strong>Expedited Shipping:</strong> 5 business days</li>
                    </ul>
                    <p class="mt-4">Please note that these timeframes are approximate and may vary depending on your location and external factors beyond our control.</p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Shipping Costs</h2>
                    <p class="mb-4">Shipping costs are calculated based on the weight and dimensions of your order, as well as the selected shipping method. The exact shipping cost will be displayed during the checkout process.</p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Order Tracking</h2>
                    <p class="mb-4">Once your order is shipped, we will provide you with a tracking number. You can use this number to track the progress of your delivery on our website or through the designated shipping carrier`s website.</p>
                </section>
            </main>
        </>
    )
}

export default TermsAndCondition
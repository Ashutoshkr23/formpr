import React from 'react'

const ShippingPolicy = () => {
    return (
        <>
            <header class="bg-blue-500 py-4">
                <div class="container mx-auto px-4">
                    <h1 class="text-white text-2xl font-bold">Shipping and Delivery Policy</h1>
                </div>
            </header>

            <main class="container mx-auto px-4 py-8">
                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Shipping Methods and Timeframes</h2>
                    <p class="mb-4">After placing your order, the items will be delivered to you within 7-10 business days</p>
                   
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

export default ShippingPolicy
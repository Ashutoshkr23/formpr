import React from 'react'

const RefundPolicy = () => {
    return (
        <>
            <header class="bg-blue-500 py-4">
                <div class="container mx-auto px-4">
                    <h1 class="text-white text-2xl font-bold">Refund Policy</h1>
                </div>
            </header>

            <main class="container mx-auto px-4 py-8">
                <section>
                    <h2 class="text-2xl font-bold mb-4">Eligibility for Refunds</h2>
                    <p class="mb-4">To be eligible for a refund, the following conditions must be met:</p>
                    <ul class="list-disc list-inside">
                        <li>The item must be in its original condition, unused, and undamaged.</li>
                        <li>The request for a refund must be made within 2 days of receiving the order.</li>
                    </ul>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Refund Process</h2>
                    <p class="mb-4">To initiate a refund, please contact our customer support team at <a href="mailto:gm@alphamintlabs.com" class="text-blue-500">gm@alphamintlabs.com</a>. Provide your order details, reason for the refund, and any supporting information or photos, if applicable. Our team will review your request and respond within 2 business days.</p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Refund Options</h2>
                    <p class="mb-4">Depending on the circumstances, we offer the following refund options:</p>
                    <ul class="list-disc list-inside">
                        <li><strong>Refund to the original payment method:</strong> The refund amount will be credited back to the original payment method used during the purchase.</li>
                        <li><strong>Store credit:</strong> If preferred, we can issue a store credit that can be used towards future purchases on our website.</li>
                    </ul>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Return Shipping</h2>
                    <p class="mb-4">If the return is due to a product defect or error on our part, we will provide a prepaid shipping label. In other cases, the customer is responsible for the return shipping costs.</p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold mb-4">Refund Processing Time</h2>
                    <p class="mb-4">Once your returned item is received and inspected, we will notify you of the refund status. The refund processing time may vary depending on the payment method and financial institution, typically ranging from 7 to 10 business days.</p>
                </section>

                <section class="mt-8">
                    <p class="mb-4">Please note that this shipping and delivery policy and refund policy are subject to change without prior notice. We recommend reviewing this page periodically for any updates or modifications.</p>
                    <p class="mb-4">If you have any questions or require further assistance, please contact our customer support team at <a href="mailto:gm@alphamintlabs.com" class="text-blue-500">gm@alphamintlabs.com</a> or visit our website for more information.</p>
                </section>
            </main>
        </>
    )
}

export default RefundPolicy
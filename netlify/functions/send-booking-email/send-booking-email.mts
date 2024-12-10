import { Context } from '@netlify/functions'
import { sendEmail } from '@netlify/emails'

export default async (request: Request, context: Context) => {
  try {
    const url = new URL(request.url)
    const from = url.searchParams.get('from') || 'default@example.com'
    const to = url.searchParams.get('to') || 'recipient@example.com'
    const subject = url.searchParams.get('subject') || 'Booking Confirmation'
    const firstName = url.searchParams.get('firstName') || 'John'
    const lastName = url.searchParams.get('lastName') || 'Doe'
    const email = url.searchParams.get('email') || 'john.doe@example.com'
    const phone = url.searchParams.get('phone') || '123-456-7890'
    const startDate = url.searchParams.get('startDate') || '2023-01-01'
    const endDate = url.searchParams.get('endDate') || '2023-01-07'
    const includeTourGuide = url.searchParams.get('includeTourGuide') || 'No'
    const totalCost = url.searchParams.get('totalCost') || '$1000'

    await sendEmail({
      from,
      to,
      subject,
      template: 'bookings',
      parameters: {
        firstName,
        lastName,
        email,
        phone,
        startDate,
        endDate,
        includeTourGuide,
        totalCost,
      },
    })

    return new Response('Email sent successfully', { status: 200 })
  } catch (error) {
    return new Response(error.toString(), { status: 500 })
  }
}

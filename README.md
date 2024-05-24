<h1> <b>Project Name:</b> Hotel Management Admin Panel</h1>

<h2>Description:</h2>

This React application is a hotel management admin panel that allows hotel employees to manage cabins, bookings, guests, and application settings.

<h2>Tech Stack:</h2>

<b>Frontend:</b> React, Redux, React Query, Styled Components, Recharts
<b>Frontend:</b> Supabase (Authentication and Database)

<h2>Features:</h2>

<h2>User Management:</h2>
Sign up new users within the application (to ensure only hotel employees have accounts).
Users can update their profile picture, name, and password.

<h2>Cabin Management:</h2>
View a table of all cabins with photo, name, capacity, price, and current discount.
Create new cabins with photo upload functionality.
Update or delete existing cabins.

<h2>Booking Management:</h2>
View a table of all bookings with arrival and departure dates, status (unconfirmed, checked-in, checked-out), paid amount, cabin and guest data.
Filter bookings by status.
See additional booking data including number of guests, number of nights, guest observations, and whether breakfast was booked.
Delete bookings.
Check in or check out guests upon arrival.
Accept payment (outside the application) and confirm payment received within the application upon check-in.
Allow guests to add breakfast for their entire stay during check-in, if not previously booked.

<h2>Guest Management:</h2>
View guest data including full name, email, national ID, nationality, and country flag.

<h2>Dashboard:</h2>
See a list of guests checking in and out for the current day.
View statistics on recent bookings, sales, check-ins, and occupancy rate for the last 7, 30, or 90 days.
See a chart showing daily hotel sales, including "total" sales and "extras" sales (breakfast only).
View a chart showing statistics on stay durations.

<h2>Settings:</h2>
Define application-wide settings including breakfast price, minimum and maximum nights allowed per booking, and maximum guests allowed per booking.

<h2>Dark Mode:</h2>
Switch between light and dark mode.

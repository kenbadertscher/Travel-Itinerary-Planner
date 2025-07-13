"use server";

import { db } from "@/data/db";
import {
  NewTrip,
  // TripGenerateSchema,
} from "@/FormsRelatedConfig/validationZod/TripGenerateSchema";
// import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { generateObject } from "ai";
import { z } from "zod";

export async function createTrip(
  values: z.infer<typeof NewTrip>,
  userId: string
) {
  try {
    const trip = await db.trip.create({
      data: {
        userId: userId,
        country: values.country,
        duration: values.duration,
        groupType: values.groupType,
        travelStyle: values.travelStyle,
        interests: values.interests,
        budgetEstimate: values.budgetEstimate,
      },
    });

    return {
      success: "Trip created successfully",
      trip: trip,
    };
  } catch (error) {
    console.error("Error creating trip:", error);
    throw new Error("Failed to create trip");
  }
}

export async function GenerateAITripIternary(
  values: z.infer<typeof NewTrip>,
  tripId: string
) {
  try {
    // const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY!;

    // const imageResponse = await fetch(
    //   `https://api.unsplash.com/search/photos?query=${values.country} ${values.interests} ${values.travelStyle}&client_id=${unsplashApiKey}`
    // );

    // const imageUrls = (await imageResponse.json()).results
    //   .slice(0, 3)
    //   .map((result: any) => result.urls?.regular || null);

    // Temporary mock images for development
    const imageUrls = [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ];

    // const prompt = `Generate a ${values.duration}-day travel itinerary for ${values.country} based on the following user information:
    // Budget: '${values.budgetEstimate}'
    // Interests: '${values.interests}'
    // TravelStyle: '${values.travelStyle}'
    // GroupType: '${values.groupType}'
    // Additional rules to follow when generating the itinerary:
    //  1. Always recommend realistic transportation methods between cities (e.g., train, bus, car).
    //  2. Include estimated travel time when moving between cities or regions.
    //  3. If travel occurs on a day, include a "Getting There" section with details on how the trip continues from the previous city.
    //  4. Avoid impractical back-and-forth travel — follow a logical geographic flow.
    //  5. Make sure all activities and transport fit within the selected budget (e.g., "Budget", "Mid-range", "Luxury").
    //  6. Do not repeat cities unless it is realistic for return travel or departure.
    //  7. The Midnight activity should should be given to cities or places that are known for nightlife or late-night activities. 
    //     also dont add the array element if no midnight is applicable to the place

    // Return the itinerary and lowest estimated price in a clean, non-markdown JSON format with the following structure:
    // {
    // "name": "A descriptive title for the trip",
    // "description": "A brief description of the trip and its highlights not exceeding 100 words",
    // "estimatedPrice": "Lowest average price for the trip in USD, e.g.price only in digits like 6000, no currency sign",
    // "duration": ${values.duration},
    // "budget": "${values.budgetEstimate}",
    // "travelStyle": "${values.travelStyle}",
    // "country": "${values.country}",
    // "interests": ${values.interests},
    // "groupType": "${values.groupType}",
    // "tags": [
    //   'Like Mountains',
    //   'Like cool stuff about the place',
    //   'Weather It is cheap or expensive idk something like that',
    //   'something else that when user sees they click'
    // ],
    // "bestTimeToVisit": [
    //   '🌸 Season (from month to month): reason to visit',
    //   '☀️ Season (from month to month): reason to visit',
    //   '🍁 Season (from month to month): reason to visit',
    //   '❄️ Season (from month to month): reason to visit'
    // ],
    // "weatherInfo": [
    //   '☀️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
    //   '🌦️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
    //   '🌧️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
    //   '❄️ Season: temperature range in Celsius (temperature range in Fahrenheit)'
    // ],
    // "location": {
    //   "city": "name of the city or region",
    //   "coordinates": [latitude, longitude],
    //   "openStreetMap": "link to open street map"
    // },
    // "itinerary": [
    // {
    //   "day": 1,
    //   "location": "City/Region Name",
    //   "gettingThere": "",
    //   "activities": [
    //     {"time": "Morning", "description": "🏰 Visit the local historic castle and enjoy a scenic walk"},
    //     {"time": "Afternoon", "description": "🖼️ Explore a famous art museum with a guided tour"},
    //     {"time": "Evening", "description": "🍷 Dine at a rooftop restaurant with local wine"}
    //     {"time": "Midnight", "description": ""}
    //   ]
    // },
    // ...
    // ]
    // }`;

    // const google = createGoogleGenerativeAI({
    //   // custom settings
    //   apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    // });

    // Temporary mock for development - will throw error but allows UI to work
    // const google = null;

    // const model = google("gemini-2.0-flash", {
    //   // structuredOutputs: ,
    // });

    // const { object: aiTrip } = await generateObject<Trip>({
    //   model,
    //   prompt,
    //   schema: TripGenerateSchema,
    // });

    // Temporary mock AI response for development
    const aiTrip = {
      name: `Amazing ${values.duration}-Day ${values.country} Adventure`,
      description: `Experience the best of ${values.country} with this carefully crafted ${values.duration}-day itinerary perfect for ${values.groupType} travelers who love ${values.interests}.`,
      estimatedPrice: "2500",
      duration: values.duration,
      budget: values.budgetEstimate,
      travelStyle: values.travelStyle,
      interests: values.interests,
      groupType: values.groupType,
      tags: ["Adventure", "Culture", "Nature", "Local Experience"],
      country: values.country,
      bestTimeToVisit: [
        "🌸 Spring (March-May): Perfect weather for outdoor activities",
        "☀️ Summer (June-August): Great for beach and water activities",
        "🍁 Fall (September-November): Beautiful autumn colors",
        "❄️ Winter (December-February): Cozy indoor experiences"
      ],
      weatherInfo: [
        "☀️ Summer: 20-30°C (68-86°F)",
        "🌦️ Spring: 15-25°C (59-77°F)",
        "🌧️ Fall: 10-20°C (50-68°F)",
        "❄️ Winter: 0-10°C (32-50°F)"
      ],
      location: {
        city: "Capital City",
        coordinates: [40.7128, -74.0060],
        openStreetMap: "https://www.openstreetmap.org/"
      },
      itinerary: Array.from({ length: values.duration }, (_, i) => ({
        day: i + 1,
        location: `Day ${i + 1} Location`,
        gettingThere: i > 0 ? "Travel from previous location" : "",
        activities: [
          { time: "Morning", description: "Explore local attractions" },
          { time: "Afternoon", description: "Enjoy local cuisine" },
          { time: "Evening", description: "Experience nightlife" }
        ]
      }))
    };

    const MakeAITripResponseInDB = await db.aIResponse.create({
      data: {
        tripId: tripId,
        title: aiTrip.name,
        description: aiTrip.description,
        estimatedPrice: aiTrip.estimatedPrice,
        duration: aiTrip.duration,
        budget: aiTrip.budget,
        travelStyle: aiTrip.travelStyle,
        interests: aiTrip.interests,
        groupType: aiTrip.groupType,
        tags: aiTrip.tags,
        country: aiTrip.country,
        images: imageUrls,
        itinerary: {
          day: aiTrip.itinerary.map((day) => ({
            day: day.day,
            location: day.location,
            gettingThere: day.gettingThere,
            activities: day.activities.map((activity) => ({
              time: activity.time,
              description: activity.description,
            })),
          })),
        },
        bestTimeToVisit: aiTrip.bestTimeToVisit,
        weatherInfo: aiTrip.weatherInfo,
        location: {
          city: aiTrip.location.city,
          coordinates: aiTrip.location.coordinates,
        },
      },
    });

    return {
      success: "AI trip itinerary generated successfully",
      aiTrip: MakeAITripResponseInDB,
    };
  } catch (error) {
    console.error("Error generating AI trip itinerary:", error);
    throw new Error("Failed to generate AI trip itinerary");
  }
}

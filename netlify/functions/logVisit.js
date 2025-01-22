// functions/logVisit.js

exports.handler = async function(event, context) {
    const now = new Date();
    console.log(`Visit at: ${now.toISOString()}`);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Visit logged with timestamp' }),
    };
  };
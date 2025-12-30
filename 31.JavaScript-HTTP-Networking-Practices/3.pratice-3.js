async function fetchIPAddress(domain) {
  try {
    const resp = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
      {
        headers: {
          accept: 'application/dns-json'
        }
      }
    )

    if (!resp.ok) {
      throw new Error(`HTTP error: ${resp.status}`)
    }

    const data = await resp.json()

    // Extract the first A record IP
    const answer = data.Answer?.find(record => record.type === 1)

    if (!answer) {
      throw new Error('No A record found')
    }

    return answer.data
  } catch (err) {
    console.error('fetchIPAddress failed:', err.message)
    return null
  }
}

async function main() {
  const domain = 'api.boot.dev'
  const ipAddress = await fetchIPAddress(domain)

  if (!ipAddress) {
    console.log('Something went wrong in fetchIPAddress')
  } else {
    console.log(`Found IP address for domain ${domain}: ${ipAddress}`)
  }
}

main()

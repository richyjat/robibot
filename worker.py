        import discord
        import asyncio
        
        client = discord.Client()
        
        @client.event
        async def on_ready():
            print('Logged in as')
            print(client.user.name)
            print(client.user.id)
            print('------')
        
        @client.event
        async def on_message(message):
            if message.content == "Hello":
                await client.send_message(message.channel, "World")
        
        client.run(NDc0NTA1MTMzMjQyMzE4ODQ5.DkReYQ.7Njgdldi_YpnGKpCR2DrO-NPy2U)
import ccxt
import time
import logging 
# configer logging to track the bot's action
Logging. Basic config (filename='coin_dcx_futue_trading.log', level=logging.INFO)
exchange = ccxt.coindcx ({
    API Key:  '51a3e4822cdaa29384b766b4d73f0e21cf8042510ef6cd4f',
    secret API key: '2129a5dfe5be19c5b52e4742eb3d46f67bdedb43d480d040b9c120e88f83e7a0',
})

# Define the trding symbol
Symbol : 'BTC/USDT',

# define the trding parameter
Order Size = 0.01,
profit Target = 0.001,
scalp Threshold = 0.0005,

# Get Account Balance In [ INR ]
Def get last price():
ticker = exchane. Fetch ticker(symbol)
return ticker['Last']

# place the future buy order 
def place buy order(amount):
try: 
    Order = Exchange. Creater market buy order(symbol, amount )
    logging.info( f "Buy order placed :{order}")
    return order 
    except Exception as e:
    logging. Error( f "Error placing but order: {str(e)}")
    return None 

# place a future sell order 
def Place sell oeder(amount):
try:
    Order = exchange. Create market sell order(symbol, amount)
    logging.info( f "Sell order place: {order}")
    return order
    except Exception as e:
    logging. Error( f "Error placing sell order: {str(e)}")
    return None

# The main trading logic 
def futures scalping strategy():
    balance = get balance()
    logging.info( f "Balance: {balance} INR")

# check if there enough balance to make a buy order 
if balance >= order size * get last price():
    logging.info("Sufficint balance, proceeding with trading.")

    # Place a buy order 
    buy order = place buy order(order size)
    if buy order is None:
        return  # Exit if buy order failed
    
    # Wait for price change to reach the profit target or stop-loss
    buy price = get_ price()
    logging.info( f "Started trading at price: {buy price} USDT")
    target price = buy price * (1 + profit target)
    stop loss price = buy price * (1 - scalp threshold)

    While True:
         current price = get last price ()
         logging.info( f "Current price:{current price} USDT ")
         
         # check if the price reached the target for profit or stop-loss
         if current price >=target price:
              Place sell order(order size)      # Sell to take profit 
              logging.info( f "Profit target reached: {target price} USDT")
              break

        if current price <= Stop loss price:
             place sell order(order size)       # sell to stop-loss 
             logging.info( f "Stop-loss triggered: {stop loss price} USDT")
             break

        time. sleep(0.01)      # wait to bit before checking the price again 

# Run the bot continously 
if __name__ =="__main__":
While True:
try:
    Futures scalping strategy()
    except Exception as e:
    logging. Error( f "Error in trading loop: {str(e)}")
    time. Sleep(01)          " # pause before starting the next scalping attempt "

import java.lang.*;

public class QueueSimulator
{
	public enum Event
	{
		ARRIVAL, DEPARTURE
	};

	private double currTime;
	private double arrivalRate;
	private double serviceTime;
	private double timeForNextArrival;
	private double timeForNextDeparture;
	private double totalSimTime;
	LinkedListQueue<Data> buffer = new LinkedListQueue<Data>();
	LinkedListQueue<Data> eventQueue = new LinkedListQueue<Data>();
	private Event e;

	public double getRandTime(double arrivalRate)
	{
		double num, time1, max = 1, min = 0, randNUM;
		randNUM = Math.random();
		time1 = (-1 / arrivalRate) * (Math.log(1 - randNUM));
		// System.out.println(time1);
		return time1;
	}

	public QueueSimulator(double aR, double servT, double simT)
	{

		this.arrivalRate = aR;
		this.serviceTime = servT;
		this.totalSimTime = simT;

	}

	public double calcAverageWaitingTime()
	{

		double sum = 0;
		double size = eventQueue.size();
		while (!eventQueue.isEmpty())
		{

			sum = eventQueue.first().getDepartureTime() - eventQueue.first().getArrivalTime() + sum;
			eventQueue.dequeue();

		}

		return sum / size;

	}

	public double runSimulation()
	{
		this.currTime = 0;
		timeForNextArrival = getRandTime(arrivalRate);
		timeForNextDeparture = timeForNextArrival + serviceTime;

		while (currTime < totalSimTime)
		{

			if (buffer.isEmpty())
			{
				timeForNextDeparture = timeForNextArrival + serviceTime;
			}

			if (timeForNextArrival < timeForNextDeparture)
			{
				e = Event.ARRIVAL;
			} else
				e = Event.DEPARTURE;

			if (e == Event.ARRIVAL)
			{

				Data d = new Data();
				d.setArrivalTime(timeForNextArrival);
				buffer.enqueue(d);

				currTime = d.getArrivalTime();

				timeForNextArrival = currTime + getRandTime(arrivalRate);

			} else
			{

				Data d = buffer.dequeue();
				d.setDepartureTime(timeForNextDeparture);
				eventQueue.enqueue(d);

				currTime = d.getDepartureTime();

				timeForNextDeparture = currTime + serviceTime;

			}

		}
		return calcAverageWaitingTime();

	}
}

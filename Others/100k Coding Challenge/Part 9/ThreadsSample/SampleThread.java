package ThreadsSample;

public class SampleThread extends Thread {
    int thread_name;

    SampleThread(int thread_name) {
        this.thread_name = thread_name;
    }

    @Override
    public void run() {
        super.run();

        for (int i = 0; i < 10; i++) {
            System.out.println("Thread: " + thread_name + "\tCount: " + i);

            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

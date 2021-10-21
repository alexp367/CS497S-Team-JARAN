
from dummy_data import DummyDataModel
import pprint


class ProfileCreator(DummyDataModel):
    def get_random_profiles(self, number):
        for i in range(0, number):
            print("Profile " + str(i+1) + ":")
            pprint.pprint(self.random_profile())
            print("-------------------------------------------")
        return

Tester = ProfileCreator()
Tester.get_random_profiles(1)